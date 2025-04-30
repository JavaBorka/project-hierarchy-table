export interface SecondChildItem {
  ID: string;
  NemesisID: string;
  SecretCode: string;
}

export interface SecondChildTableProps {
  secondChildRecords: SecondChildItem[];
  onRemove: (id: string) => void;
}

export interface SecondChildDataProps {
  secondChildItem: SecondChildItem;
  onRemove: (id: string) => void;
}
