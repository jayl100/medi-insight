import db from '../models/index.js';
import { Op } from 'sequelize';

export function buildHospitalQuery(query) {
  const { type, region } = query;
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

  include.push({
    model: db.HospitalDevice,
    attributes: ['quantity'],
    include: [{
      model: db.Device,
      attributes: ['name'],
    }],
    required: false,
  });

  return { include };
}

const toArray = (v => [].concat(v ?? []));
