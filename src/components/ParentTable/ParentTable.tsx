import './ParentTable.css';
import '../../styles/TableBase.css';
import { ParentHeader } from './ParentHeader';
import { ParentData } from './ParentData';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { fetchParentData } from '../../services/fetchParentData';
import { ParentItem } from '../../types/parentTableTypes';
import { filterOutById } from '../../utils/filterOutById';

export const ParentTable: React.FC = () => {
  const [parentData, setParentData] = useState<ParentItem[]>([]);

  useEffect(() => {
    fetchParentData().then(setParentData);
  }, []);

  const handleRemove = (idToDelete: string) => {
    const filteredData = filterOutById(idToDelete, parentData);
    setParentData(filteredData);
  };

  return (
    <div className="table__parent">
      <ParentHeader />
      {parentData.map(parentItem => (
        <ParentData
          key={parentItem.ID}
          parentItem={parentItem}
          onRemove={handleRemove}
        />
      ))}
    </div>
  );
};
