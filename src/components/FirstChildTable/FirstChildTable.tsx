import './FirstChildTable.css';
import '../../styles/TableBase.css';
import { FirstChildHeader } from './FirstChildHeader';
import { FirstChildData } from './FirstChildData';
import { FirstChildTableProps } from '../../types/firstChildTableTypes';
import React from 'react';

export const FirstChildTable: React.FC<FirstChildTableProps> = ({
  firstChildRecords,
  onRemove,
}) => {
  console.log(onRemove);
  return (
    <div className="table__first-child">
      <FirstChildHeader />
      {firstChildRecords.map(firstChildItem => (
        <FirstChildData
          key={firstChildItem.ID}
          firstChildItem={firstChildItem}
          onRemove={onRemove}
        />
      ))}
    </div>
  );
};
