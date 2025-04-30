export function removeDuplicatesById<T extends { ID: string }>(
  items: T[]
): T[] {
  const seen = new Set<string>();

  return items.filter(item => {
    if (seen.has(item.ID)) return false;
    seen.add(item.ID);
    return true;
  });
}
