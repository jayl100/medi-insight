import db from '../../models/index.js';
import { appError } from '../../utils/appError.js';
import StatusCodes from 'http-status-codes';
import { buildDeviceStandardsMap } from '../../utils/deviceMapper.js';
import { buildHospitalQuery } from '../../utils/buildHospitalQuery.js';
import { commonPagination } from '../../utils/commonPagination.js';

export async function getHospitalDetailService(id) {
  const hospital = await db.Hospital.findByPk(id, {
    include: [{
      model: db.HospitalType, attributes: ['name']
    }]
  });
  const hospitalWithType = hospital.get({ plain: true });
  delete hospitalWithType.HospitalType;

  if (!hospital) {
    throw new appError('Not Found Page', StatusCodes.NOT_FOUND);
  }

  const typeId = hospital.hospital_type_id;

  const [devices, standards] = await Promise.all([
    db.HospitalDevice.findAll({
      where: { hospital_id: hospital.id },
      include: [
        {
          model: db.Device, attributes: ['id', 'name'],
        }
      ]
    }),
    db.HospitalDeviceStandard.findAll({
      where: { hospital_type_id: typeId},
      attributes: ['device_id', 'expected_quantity']
    })
  ])

  const standardMap = buildDeviceStandardsMap(standards);

  const devicesList = devices.map(device => ({
    device_id: device.device_id,
    name: device.Device?.name || null,
    quantity: device.quantity,
    expected_quantity: standardMap[device.device_id],
    quantity_diff: device.quantity - standardMap[device.device_id] ?? 0,
  }));


  return {
    ...hospitalWithType,
    type_name: hospital.HospitalType.name,
    device_list: devicesList,
  };
}

export async function getHospitalListService(query) {
  const { include } = buildHospitalQuery(query);
  const { limit, offset, getMeta } = commonPagination(query);

  const { rows, count } = await db.Hospital.findAndCountAll({
    include,
    distinct: true,
    order: [['id', 'ASC']],
    limit,
    offset,
  });
  const meta = getMeta(count);

  const data = rows.map((hospital) => {
    const plain = hospital.get({ plain: true });

    return {
      id: plain.id,
      name: plain.name,
      type_name: plain.HospitalType?.name,
      devices: (plain.HospitalDevices ?? []).map((device) => device.Device?.name).filter(Boolean),
      district_name: plain.District?.name,
      region_name: plain.District?.Region?.name,
    };
  });

  return { data, meta };
}

export async function getHospitalTypeService() {
  return await db.HospitalType.findAll();
}


