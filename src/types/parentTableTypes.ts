export interface ParentItem {
  ID: string;
  Name: string;
  Gender: string;
  Ability: string;
  MinimalDistance: string;
  Weight: string;
  Born: string;
  InSpaceSince: string;
  BeerConsumption: string;
  KnowsTheAnswer: string;
}

export interface ParentDataProps {
  parent: ParentItem;
}
