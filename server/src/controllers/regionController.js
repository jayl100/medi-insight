import db from '../../models/index.js';
import StatusCodes from 'http-status-codes';

export const getRegion = async(req, res, next) => {
  try {
    const regions = await db.Region.findAll();
    res.status(StatusCodes.OK).json({
      data: regions
    });
  } catch (err) {
    next(err);
  }
}

export const getDistrict = async(req, res, next) => {
  try {
    const districts = await db.District.findAll();
    res.status(StatusCodes.OK).json({
      data: districts
    });
  } catch (err) {
    next(err);
  }
};

export const getDistrictsByRegion = async(req, res, next) => {
  try {
    const { regionId } = req.params;
    const districts = await db.District.findAll({ where: { region_id: regionId } });
    res.status(StatusCodes.OK).json({
      data: districts
    });
  } catch (err) {
    next(err);
  }
}