import './ParentTable.css';
import '../../styles/TableBase.css';
import { ParentHeader } from './ParentHeader';
import { ParentData } from './ParentData';
import { parentMockData } from '../../data/mockData/parentMockData';
import React from 'react';

export const ParentTable: React.FC = () => {
  return (
    <div className="table__parent">
      <ParentHeader />
      {parentMockData.map(parent => (
        <ParentData key={parent.ID} parent={parent} />
      ))}
    </div>
  );
};
