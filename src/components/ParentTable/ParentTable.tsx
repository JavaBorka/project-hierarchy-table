import './ParentTable.css';
import '../../styles/TableBase.css';
import { ParentHeader } from './ParentHeader';
import { ParentData } from './ParentData';

export const ParentTable = () => {
  return (
    <div className="table__parent">
      <ParentHeader />
      <ParentData />
    </div>
  );
};
