import './SecondChildTable.css';
import '../../styles/TableBase.css';
import { SecondChildHeader } from './SecondChildHeader';
import { SecondChildData } from './SecondChildData';

export const SecondChildTable = () => {
  return (
    <div className="table__second-child">
      <SecondChildHeader />
      <SecondChildData />
    </div>
  );
};
