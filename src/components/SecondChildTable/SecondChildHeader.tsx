import React from 'react';

export const SecondChildHeader: React.FC = () => {
  return (
    <div className="table__second-child-header table__header">
      <div className="table__cell">ID</div>
      <div className="table__cell">Nemesis ID</div>
      <div className="table__cell">Secret Code</div>
      <div className="table__cell">Delete</div>
    </div>
  );
};
