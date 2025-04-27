import { useState } from 'react';
import { FirstChildTable } from '../FirstChildTable/FirstChildTable';

export const ParentData = () => {
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
        <div className="table__cell">44</div>
        <div className="table__cell">Trillian</div>
        <div className="table__cell">Female</div>
        <div className="table__cell">Mathematician</div>
        <div className="table__cell">6.2</div>
        <div className="table__cell">49</div>
        <div className="table__cell">Mon Dec 14 1994</div>
        <div className="table__cell">Wed Dec 24 2014</div>
        <div className="table__cell">6704</div>
        <div className="table__cell">True</div>
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
