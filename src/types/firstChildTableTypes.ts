import { SecondChildItem } from './secondChildTableTypes';

export interface FirstChildItem {
  ID: string;
  CharacterID: string;
  IsAlive: string;
  Years: string;
  secondChildRecords: SecondChildItem[];
}

export interface FirstChildTableProps {
  firstChildRecords: FirstChildItem[];
}

export interface FirstChildDataProps {
  firstChildItem: FirstChildItem;
}
