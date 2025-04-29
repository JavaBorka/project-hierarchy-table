export interface RawParent {
  data: { [key: string]: unknown };
  children?: {
    has_nemesis?: {
      records: RawFirstChild[];
    };
  };
}

export interface RawFirstChild {
  data: { [key: string]: unknown };
  children?: {
    has_secrete?: {
      records: RawSecondChild[];
    };
  };
}

export interface RawSecondChild {
  data: { [key: string]: unknown };
}
