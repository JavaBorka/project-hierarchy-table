import { useState } from 'react';
import { SecondChildTable } from '../SecondChildTable/SecondChildTable';
import { FirstChildDataProps } from '../../types/firstChildTableTypes';
import React from 'react';

export const FirstChildData: React.FC<FirstChildDataProps> = ({
  firstChildItem,
  onRemove,
}) => {
  const [isFirstChildOpen, setIsFirstChildOpen] = useState<boolean>(false);

  return (
    <>
      <div className="table__first-child-data">
        <div className="table__cell">
          <button
            className="table__toggle-btn"
            onClick={() => setIsFirstChildOpen(prev => !prev)}
          >
            {' '}
            {firstChildItem.secondChildRecords?.length > 0
              ? isFirstChildOpen
                ? '▼'
                : '▶'
              : null}
          </button>
        </div>
        <div className="table__cell">{firstChildItem.ID}</div>
        <div className="table__cell">{firstChildItem.CharacterID}</div>
        <div className="table__cell">{firstChildItem.IsAlive}</div>
        <div className="table__cell">{firstChildItem.Years}</div>

        <div className="table__cell">
          <button
            className="table__remove-btn"
            onClick={() => {
              onRemove(firstChildItem.ID);
            }}
          >
            ❌
          </button>
        </div>
      </div>
      <div
        className={`table__second-child-wrapper ${isFirstChildOpen ? 'table__second-child-wrapper--open' : ''} `}
      >
        {isFirstChildOpen && firstChildItem.secondChildRecords?.length > 0 && (
          <SecondChildTable
            secondChildRecords={firstChildItem.secondChildRecords}
            onRemove={onRemove}
          />
        )}
      </div>
    </>
  );
};
