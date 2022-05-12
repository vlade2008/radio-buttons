import React from 'react';
import ButtonGroup from '../../components/ButtonGroup';
import mockData from '../../api/mock-data.json'; 
import './styles.css';

const Main = () => {
  return (
    <div className="container">
      {
        mockData.menus.map((menu, index) => {
          return (
            <ButtonGroup
              key={index}
              data={menu}
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
