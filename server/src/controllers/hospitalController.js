import db from '../../models/index.js';
import StatusCodes from 'http-status-codes';
import {
  getHospitalDetailService,
  getHospitalListService,
  getHospitalTypeService
} from '../services/hospitalService.js';

export const getHospitalList = async(req, res, next) => {
  try {
    const { data, meta } = await getHospitalListService(req.query);

    if (data.length > 0) {
      return res.status(StatusCodes.OK).json({ data, meta });
    }

    return res.status(StatusCodes.OK).json([]);

  } catch (err) {
    next(err);
  }
};

export const getHospitalDetail = async(req, res, next) => {
  try {
    const { id } = req.params;
    const detail = await getHospitalDetailService(id);

    return res.status(StatusCodes.OK).json({
      data: detail,
    });
  } catch (err) {
    next(err);
  }
};

export const getHospitalType = async(req, res, next) => {
  try {
    res.status(StatusCodes.OK).json({
      data: await getHospitalTypeService()
    });
  } catch (err) {
    next(err);
  }
};