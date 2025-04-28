export interface SecondChildItem {
  ID: string;
  NemesisID: string;
  SecretCode: string;
}

export interface SecondChildTableProps {
  secondChildRecords: SecondChildItem[];
}

export interface SecondChildDataProps {
  secondChildItem: SecondChildItem;
}
