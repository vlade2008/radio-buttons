import React, { useState } from 'react';
import ButtonGroup from '../../components/ButtonGroup';
import mockData from '../../api/mock-data.json'; 
import { radioUtils } from '../../utls/radioUtils';
import { groupUtils } from '../../utls/groupUtils';
import './styles.css';

const Main = () => {
  const [currentGroup, setCurrentGroup] = useState(0);
  const [radioUtilsData, setRadioUtils] = useState(() => {
    return radioUtils(mockData.menus, mockData.rules);
  });

  const onClick = (selected) => {
    let selectedGroup = selected.charAt(0) - 1;
    setCurrentGroup(selectedGroup);
    const newData = groupUtils(radioUtilsData, selected);
    setRadioUtils(newData);
  }

  const onHandleReset = () => {
    setRadioUtils(radioUtils(mockData.menus, mockData.rules));
  };


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
        <button className='submit' disabled={currentGroup !== 2}>
          Submit
        </button>
        <button className='reset' onClick={onHandleReset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Main;
