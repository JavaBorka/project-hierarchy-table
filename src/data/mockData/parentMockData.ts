import { ParentItem } from '../../types/parentTableTypes';

export const parentMockData: ParentItem[] = [
  {
    ID: '44',
    Name: 'Trillian',
    Gender: 'female',
    Ability: 'mathematician',
    MinimalDistance: '6.2',
    Weight: '49',
    Born: 'Mon Dec 14 1994',
    InSpaceSince: 'Wed Dec 24 2014',
    BeerConsumption: '6704',
    KnowsTheAnswer: 'true',
    firstChildRecords: [
      {
        ID: '1007',
        CharacterID: '44',
        IsAlive: 'true',
        Years: '29',
        secondChildRecords: [
          {
            ID: '2008',
            NemesisID: '1007',
            SecretCode: '1799820570',
          },
          {
            ID: '2009',
            NemesisID: '1007',
            SecretCode: '1799820571',
          },
        ],
      },
      {
        ID: '1684',
        CharacterID: '44',
        IsAlive: 'true',
        Years: '28',
        secondChildRecords: [],
      },
    ],
  },
  {
    ID: '48',
    Name: 'Zaphod Beeblebrox',
    Gender: 'male',
    Ability: 'semi_half_cousin',
    MinimalDistance: '1.6',
    Weight: '91',
    Born: 'Mon Feb 17 1997',
    InSpaceSince: 'Wed Dec 04 2014',
    BeerConsumption: '679420',
    KnowsTheAnswer: 'true',
    firstChildRecords: [],
  },
  {
    ID: '52',
    Name: 'Ford Prefect',
    Gender: 'male',
    Ability: 'has_towel',
    MinimalDistance: '0.8',
    Weight: '107',
    Born: 'Thu May 41 2001',
    InSpaceSince: 'Sun Dec 21 2014',
    BeerConsumption: '62544',
    KnowsTheAnswer: 'true',
    firstChildRecords: [],
  },
];
