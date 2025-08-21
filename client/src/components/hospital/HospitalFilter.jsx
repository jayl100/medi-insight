import React, { useEffect } from 'react';
import styled from 'styled-components';
import useHospital from '../../hooks/useHospital.jsx';

function HospitalFilter({ location, onSelectDevice, onSelectRegion, hospitals }) {
  const params = new URLSearchParams(location.search);
  const selectedIds = params.getAll('device_id').map(v => parseInt(v, 10)).filter(Number.isInteger);
  const selectedRegion = params.get('region') || '전체';
  const { isDevices, fetchDevicesList } = useHospital();
  const devices = isDevices.map(d => d)

  useEffect(() => {
    fetchDevicesList();
  }, [])


  return (
    <FiltersBar>
      <DeviceTabs>
        <TabButton aria-pressed={selectedIds.length === 0} onClick={() => onSelectDevice('ALL')}>전체</TabButton>
        {devices.map((device) => {
          const pressed = selectedIds.includes(device.id);
          return (
            <TabButton
              key={device.id}
              aria-pressed={pressed}
              onClick={() => onSelectDevice(device.id)}
            >
              {device.name}
            </TabButton>
          );
        })}
      </DeviceTabs>

      <RegionSelect
        value={selectedRegion}
        onChange={(e) => onSelectRegion(e.target.value)}
      >
        <option value="전체">전체 지역</option>
        {hospitals.map((h) => (
          <option key={h.id} value={h.region_name}>
            {h.region_name}
          </option>
        ))}
      </RegionSelect>
    </FiltersBar>
  );
}

export default HospitalFilter;

// styled-components
const FiltersBar = styled.div`
    display: flex;
    gap: 12px;
    align-items: center;
    margin-bottom: 1rem;
`;

const DeviceTabs = styled.div`
    display: flex;
    gap: 8px;
`;

const TabButton = styled.button`
    padding: 6px 12px;
    border-radius: 16px;
    border: 1px solid #ddd;
    background: ${({ ['aria-pressed']: pressed }) =>
            pressed ? '#E6FBFB' : '#fff'};
    color: ${({ ['aria-pressed']: pressed }) =>
            pressed ? '#00CDCD' : '#333'};
    cursor: pointer;
`;

const RegionSelect = styled.select`
    padding: 6px 10px;
    border-radius: 8px;
    border: 1px solid #ddd;
`;
