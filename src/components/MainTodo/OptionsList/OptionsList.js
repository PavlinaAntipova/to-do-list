import React from 'react';

function OptionsList() {
  return (
    <div className="option">
      <ul>
        <li>
          <button type="button">Rename</button>
        </li>
        <li>
          <button type="button">Hide completed tasks</button>
        </li>
        <li>
          <button type="button">Delete</button>
        </li>
      </ul>
    </div>
  );
}

export default OptionsList;
