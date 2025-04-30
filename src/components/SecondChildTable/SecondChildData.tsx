import React from 'react';
import { SecondChildDataProps } from '../../types/secondChildTableTypes';

export const SecondChildData: React.FC<SecondChildDataProps> = ({
  secondChildItem,
  onRemove,
}) => {
  return (
    <div className="table__second-child-data">
      <div className="table__cell">{secondChildItem.ID}</div>
      <div className="table__cell">{secondChildItem.NemesisID}</div>
      <div className="table__cell">{secondChildItem.SecretCode}</div>
      <div className="table__cell">
        <button
          className="table__remove-btn"
          onClick={() => {
            onRemove(secondChildItem.ID);
          }}
        >
          ❌
        </button>
      </div>
    </div>
  );
};
