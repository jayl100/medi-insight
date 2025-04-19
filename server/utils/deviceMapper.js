import db from '../models/index.js';

export function buildDeviceStandardsMap(standards) {
  return standards.reduce((map, standard) => {
    map[standard.device_id] = standard.expected_quantity;
    return map;
  } , {})
}