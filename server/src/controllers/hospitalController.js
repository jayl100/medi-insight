import db from '../../models/index.js';
import StatusCodes from 'http-status-codes';

export const getList = async (req, res) => {
  res.json({
    message: 'Hospital List',
  })
}

export const getDetail = async (req, res) => {
  res.json({
    message: 'Hospital Detail',
  })
}

export const getHospitalType = async (req, res) => {
  const hospitalTypes = await db.HospitalType.findAll()
  res.status(StatusCodes.OK).json({
    data: hospitalTypes })
}