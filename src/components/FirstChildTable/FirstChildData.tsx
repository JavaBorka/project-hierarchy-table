import { useState } from 'react';
import { SecondChildTable } from '../SecondChildTable/SecondChildTable';

export const FirstChildData = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="table__first-child-data">
        <div className="table__cell">
          <button
            className="table__toggle-btn"
            onClick={() => setIsOpen(prev => !prev)}
          >
            {isOpen ? '▼' : '▶'}
          </button>
        </div>
        <div className="table__cell">1007</div>
        <div className="table__cell">44</div>
        <div className="table__cell">true</div>
        <div className="table__cell">29</div>

        <div className="table__cel">
          <button className="table__remove-btn">❌</button>
        </div>
      </div>

      <div
        className={`table__second-child-wrapper ${isOpen ? 'table__second-child-wrapper--open' : ''} `}
      >
        <SecondChildTable />
      </div>
    </>
  );
};
