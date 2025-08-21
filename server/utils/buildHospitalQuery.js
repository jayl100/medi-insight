import db from '../models/index.js';
import { Op } from 'sequelize';

export function buildHospitalQuery(query) {
  const { type, region, device } = query;
  const deviceIdRaw = query.device_id;
  const deviceNameRaw = query.device;

  const deviceIds = toArrayInt(deviceIdRaw);
  const deviceNames = toArray(deviceNameRaw);

  const include = [];

  if (type) {
    include.push({
      model: db.HospitalType,
      attributes: ['name'],
      where: { name: { [Op.in]: toArray(type) } },
      required: true,
    });
  } else {
    include.push({
      model: db.HospitalType, attributes: ['name'],
    });
  }

  if (region) {
    include.push({
      model: db.District,
      attributes: ['name'],
      required: true,
      include: [{
        model: db.Region,
        attributes: ['name'],
        where: { name: { [Op.in]: toArray(region) } },
        required: true,
      }]
    });
  } else {
    include.push({
      model: db.District,
      attributes: ['name'],
      include: [{ model: db.Region, attributes: ['name'] }],
    });
  }

  const hasDeviceId = deviceIds.length > 0;
  const hasDeviceName = deviceNames.length > 0;

  include.push({
    model: db.HospitalDevice,
    attributes: [],
    required: !!device,
    include: [{
      model: db.Device,
      attributes: [],
      ...(hasDeviceName && { where: { name: { [Op.in]: deviceNames } } })
    }],
    ...(hasDeviceId && { where: { name: { [Op.in]: deviceIds } } }),
  });

  return { include };
}

const toArray = (v) => {
  if (Array.isArray(v)) return v;
  if (typeof v === 'string') return v.split(',').map(s => s.trim()).filter(Boolean);
  return [];
};

const toArrayInt = (v) => {
  const arr = toArray(v);
  return arr
    .map(x => parseInt(x, 10))
    .filter(n => Number.isInteger(n) && n > 0);
};