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
  onRemove: (id: string) => void;
}

export interface FirstChildDataProps {
  firstChildItem: FirstChildItem;
  onRemove: (id: string) => void;
}
