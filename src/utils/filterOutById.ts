import { ParentItem } from '../types/parentTableTypes';

export const filterOutById = (
  idToDelete: string,
  parentData: ParentItem[]
): ParentItem[] => {
  const filteredParents = parentData.filter(parent => parent.ID !== idToDelete);

  const updated = filteredParents.map(parent => ({
    ...parent,
    firstChildRecords: parent.firstChildRecords
      .filter(firstChild => firstChild.ID !== idToDelete)
      .map(firstChild => ({
        ...firstChild,
        secondChildRecords: firstChild.secondChildRecords.filter(
          secondChild => secondChild.ID !== idToDelete
        ),
      })),
  }));

  return updated;
};
