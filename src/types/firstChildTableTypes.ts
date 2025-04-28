export interface FirstChildItem {
  ID: string;
  CharacterID: string;
  IsAlive: string;
  Years: string;
}

export interface FirstChildTableProps {
  firstChildRecords: FirstChildItem[];
}

export interface FirstChildDataProps {
  firstChildItem: FirstChildItem;
}
