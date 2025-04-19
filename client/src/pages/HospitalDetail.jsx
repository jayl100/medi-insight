import React, { useEffect } from 'react';
import useHospital from '../hooks/useHospital.jsx';
import { useParams } from 'react-router-dom';

function HospitalDetail() {
  const { id } = useParams();
  const idInt = parseInt(id);
  const { isHospitalDetail, fetchHospitalDetail } = useHospital();

  useEffect(() => {
    fetchHospitalDetail(idInt);
  }, []);

  return (
    <div>
      <div>
        <p>{isHospitalDetail.type_name}</p>
        <h1>{isHospitalDetail.name}</h1>
        <ul>
          {isHospitalDetail.device_list.map(d =>
            <li key={d.device_id}>{d.name}</li>)
          }
        </ul>
        <p>{isHospitalDetail.address}</p>
        <p>{isHospitalDetail.phone}</p>
        <p>{isHospitalDetail.doctor_quantity}</p>
      </div>
      <div>
        <table>
          <tbody>
          {isHospitalDetail.device_list.map((d) => (
            <tr key={d.device_id}>
              <td>{d.name}</td>
              <td>{d.quantity}</td>
              <td>{d.quantity_diff}</td>
            </tr>
          ))}
          </tbody>
        </table>

      </div>
    </div>
  );
}


export default HospitalDetail;