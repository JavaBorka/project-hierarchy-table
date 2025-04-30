import { useState } from 'react';
import { FirstChildTable } from '../FirstChildTable/FirstChildTable';
import { ParentDataProps } from '../../types/parentTableTypes';
import React from 'react';

export const ParentData: React.FC<ParentDataProps> = ({ parentItem }) => {
  const [isParentOpen, setIsParentOpen] = useState<boolean>(false);

  return (
    <>
      <div className="table__parent-data">
        <div className="table__cell">
          <button
            className="table__toggle-btn"
            onClick={() => setIsParentOpen(prev => !prev)}
          >
            {isParentOpen
              ? '▼'
              : parentItem.firstChildRecords?.length > 0 && '▶'}
          </button>
        </div>
        <div className="table__cell">{parentItem.ID}</div>
        <div className="table__cell">{parentItem.Name}</div>
        <div className="table__cell">{parentItem.Gender}</div>
        <div className="table__cell">{parentItem.Ability}</div>
        <div className="table__cell">{parentItem.MinimalDistance}</div>
        <div className="table__cell">{parentItem.Weight}</div>
        <div className="table__cell">{parentItem.Born}</div>
        <div className="table__cell">{parentItem.InSpaceSince}</div>
        <div className="table__cell">{parentItem.BeerConsumption}</div>
        <div className="table__cell">{parentItem.KnowsTheAnswer}</div>
        <div className="table__cell">
          <button className="table__remove-btn">❌</button>
        </div>
      </div>

      <div
        className={`table__first-child-wrapper ${isParentOpen ? 'table__first-child-wrapper--open' : ''}`}
      >
        {isParentOpen && parentItem.firstChildRecords?.length > 0 && (
          <FirstChildTable firstChildRecords={parentItem.firstChildRecords} />
        )}
      </div>
    </>
  );
};
