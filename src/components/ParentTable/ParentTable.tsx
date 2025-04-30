import './ParentTable.css';
import '../../styles/TableBase.css';
import { ParentHeader } from './ParentHeader';
import { ParentData } from './ParentData';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { fetchParentData } from '../../services/fetchParentData';
import { ParentItem } from '../../types/parentTableTypes';

export const ParentTable: React.FC = () => {
  const [parentData, setParentData] = useState<ParentItem[]>([]);

  useEffect(() => {
    fetchParentData().then(setParentData);
  }, []);

  const handleRemove = (idToDelete: string) => {
    const filteredParents = parentData.filter(
      parent => parent.ID !== idToDelete
    );

    const updated = filteredParents.map(parent => ({
      ...parent,
      firstChildRecords: parent.firstChildRecords
        .filter(firstChild => firstChild.ID !== idToDelete)
        .map(firstChild => ({
          ...firstChild,
          secondChildRecords: firstChild.secondChildRecords.filter(
            secondChild => secondChild.ID !== idToDelete
          ),
        })),
    }));

    setParentData(updated);
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
