import { ParentItem } from '../types/parentTableTypes';
import {
  RawParent,
  RawFirstChild,
  RawSecondChild,
} from '../types/rawDataTypes';
import { removeDuplicatesById } from '../utils/removeDuplicates';

export const transformData = (parentData: RawParent[]): ParentItem[] => {
  const transformed = parentData.map(parent => ({
    ID: parent.data.ID as string,
    Name: parent.data.Name as string,
    Gender: parent.data.Gender as string,
    Ability: parent.data.Ability as string,
    MinimalDistance: parent.data['Minimal distance'] as string,
    Weight: parent.data.Weight as string,
    Born: parent.data.Born as string,
    InSpaceSince: parent.data['In space since'] as string,
    BeerConsumption: parent.data['Beer consumption (l/y)'] as string,
    KnowsTheAnswer: parent.data['Knows the answer?'] as string,
    firstChildRecords:
      parent.children?.has_nemesis?.records?.map(
        (firstChild: RawFirstChild) => ({
          ID: firstChild.data.ID as string,
          CharacterID: firstChild.data['Character ID'] as string,
          IsAlive: firstChild.data['Is alive?'] as string,
          Years: firstChild.data.Years as string,
          secondChildRecords:
            firstChild.children?.has_secrete?.records?.map(
              (secondChild: RawSecondChild) => ({
                ID: secondChild.data.ID as string,
                NemesisID: secondChild.data['Nemesis ID'] as string,
                SecretCode: secondChild.data['Secrete Code'] as string,
              })
            ) ?? [],
        })
      ) ?? [],
  }));

  return removeDuplicatesById(transformed);
};
