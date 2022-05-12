import React, { useState } from 'react';
import ButtonGroup from '../../components/ButtonGroup';
import mockData from '../../api/mock-data.json'; 
import { radioUtils } from '../../utls/radioUtils';
import './styles.css';

const Main = () => {
  const [radioUtilsData] = useState(() => {
    return radioUtils(mockData.menus, mockData.rules);
  });

  const onClick = (selected) => {
    console.log(selected, 'selectedselected');
  }

  return (
    <div className="container">
      {
        mockData.menus.map((menu, index) => {
          return (
            <ButtonGroup
              onClick={onClick}
              key={index}
              data={menu}
              disabledId={radioUtilsData[index]}
            />
          );
        })
      }
      <div className='button_group'>
        <button className='submit'>
          Submit
        </button>
        <button className='reset'>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Main;
