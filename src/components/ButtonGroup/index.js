import React from 'react';
import Button from '../Button'
import './styles.css';

const ButtonGroup = (props) => {
  const { data, onClick, disabledId } = props;
  const isDisabled = id => disabledId.find(o => o.id === id).disabled;
  return (
    <div className="wrapper">
      {
        data.map(item => {
          return (
            <Button value={item.value} key={item.id} onClick={onClick} id={item.id} disabled={isDisabled(item.id)}>
              {item.value}
            </Button>
          );
        })
      }
    </div>
  )
}

export default ButtonGroup;
