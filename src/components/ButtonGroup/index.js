import React from 'react';
import Button from '../Button'
import './styles.css';

const ButtonGroup = (props) => {
  const { data } = props;
  return (
    <div className="wrapper">
      {
        data.map(item => {
          return (
            <Button value={item.value} key={item.id}>
              {item.value}
            </Button>
          );
        })
      }
    </div>
  )
}

export default ButtonGroup;
