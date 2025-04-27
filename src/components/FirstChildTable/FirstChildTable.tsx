import './FirstChildTable.css';
import '../../styles/TableBase.css';
import { FirstChildHeader } from './FirstChildHeader';
import { FirstChildData } from './FirstChildData';

export const FirstChildTable = () => {
  return (
    <div className="table__first-child-wrapper">
      <div className="table__first-child">
        <FirstChildHeader />
        <FirstChildData />
      </div>
    </div>
  );
};
