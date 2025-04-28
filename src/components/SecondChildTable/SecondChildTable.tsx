import './SecondChildTable.css';
import '../../styles/TableBase.css';
import { SecondChildHeader } from './SecondChildHeader';
import { SecondChildData } from './SecondChildData';
import React from 'react';
import { SecondChildTableProps } from '../../types/secondChildTableTypes';

export const SecondChildTable: React.FC<SecondChildTableProps> = ({
  secondChildRecords,
}) => {
  return (
    <div className="table__second-child">
      <SecondChildHeader />
      {secondChildRecords.map(secondChildItem => (
        <SecondChildData
          key={secondChildItem.ID}
          secondChildItem={secondChildItem}
        />
      ))}
    </div>
  );
};
