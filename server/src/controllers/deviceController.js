import db from '../../models/index.js';
import StatusCodes from 'http-status-codes';

export const getDevice = async(req, res, next) => {
  try {
    const devices = await db.Device.findAll();
    res.status(StatusCodes.OK).json({
      data: devices
    });

  } catch (err) {
    next(err);
  }
};
