import React from 'react';
import { useNavigate } from 'react-router-dom';

function HospitalList({ hospitals, total }) {
  const navigate = useNavigate();

  const handleHospitalDetail = (id) => {
    navigate(`/hospitals/${id}`);
  }

  return (
    <table>
      <tbody>
      {hospitals.map((hospital) => (
        <tr key={hospital.id}>
          <td>{hospital.id}</td>
          <td onClick={() => handleHospitalDetail(hospital.id)}>{hospital.name}</td>
          <td>{hospital.type_name}</td>
          <td>{hospital.region_name}</td>
          <td>{hospital.devices}</td>
        </tr>
      ))}
      </tbody>
    </table>
  );
}

export default HospitalList;