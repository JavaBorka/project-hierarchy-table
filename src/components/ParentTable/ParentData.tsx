import { useState } from 'react';
import { FirstChildTable } from '../FirstChildTable/FirstChildTable';
import { ParentDataProps } from '../../types/parentTableTypes';
import React from 'react';

export const ParentData: React.FC<ParentDataProps> = ({ parent }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="table__parent-data">
        <div className="table__cell">
          <button
            className="table__toggle-btn"
            onClick={() => setIsOpen(prev => !prev)}
          >
            {isOpen ? '▼' : '▶'}
          </button>
        </div>
        <div className="table__cell">{parent.ID}</div>
        <div className="table__cell">{parent.Name}</div>
        <div className="table__cell">{parent.Gender}</div>
        <div className="table__cell">{parent.Ability}</div>
        <div className="table__cell">{parent.MinimalDistance}</div>
        <div className="table__cell">{parent.Weight}</div>
        <div className="table__cell">{parent.Born}</div>
        <div className="table__cell">{parent.InSpaceSince}</div>
        <div className="table__cell">{parent.BeerConsumption}</div>
        <div className="table__cell">{parent.KnowsTheAnswer}</div>
        <div className="table__cell">
          <button className="table__remove-btn">❌</button>
        </div>
      </div>

      <div
        className={`table__first-child-wrapper ${isOpen ? 'table__first-child-wrapper--open' : ''}`}
      >
        <FirstChildTable />
      </div>
    </>
  );
};
