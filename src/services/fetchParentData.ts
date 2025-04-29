import { transformData } from './transformData';
import { ParentItem } from '../types/parentTableTypes';
import { RawParent } from '../types/rawDataTypes';

export const fetchParentData = async (): Promise<ParentItem[]> => {
  try {
    const reqParentData = await fetch('/parentData.json');
    const parentData: RawParent[] = await reqParentData.json();

    return transformData(parentData);
  } catch (error) {
    console.error('Error fetching data', error);
    throw error;
  }
};
