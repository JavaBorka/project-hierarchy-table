import './App.css';
import { FirstChildTable } from './components/FirstChildTable/FirstChildTable';
import { ParentTable } from './components/ParentTable/ParentTable';
import { SecondChildTable } from './components/SecondChildTable/SecondChildTable';

export const App = () => {
  return (
    <div className="table">
      <ParentTable />
      <FirstChildTable />
      <SecondChildTable />
    </div>
  );
};
