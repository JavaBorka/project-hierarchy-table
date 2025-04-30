export const filterOutById = <T extends { ID: string }>(
  idToDelete: string,
  items: T[]
): T[] => {
  return items.filter(item => item.ID !== idToDelete);
};
