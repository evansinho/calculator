import React from 'react';
import Button from './Button';

const ButtonPanel = () => {
  const firstRow = ['AC', '+/-', '%', '÷'];
  const secondRow = ['7', '8', '9', 'x'];
  const thirdRow = ['4', '5', '6', '-'];
  const fourthRow = ['1', '2', '3', '+'];
  const fifthRow = ['0', '.', '='];
  const rows = [firstRow, secondRow, thirdRow, fourthRow, fifthRow];
  return (
    <div id="button-panel">
      {rows.map(row => (
        <div className="btn-group" key={row}>
          {row.map(char => (
            <Button
              key={char}
              name={`${char}`}
              color={['+', '-', 'x', '÷', '='].includes(char) ? 'orange' : ''}
              wide={char === '0'}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default ButtonPanel;