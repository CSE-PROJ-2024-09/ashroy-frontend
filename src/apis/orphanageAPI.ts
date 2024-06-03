import { child, get, ref } from 'firebase/database';
import { database } from '../firebase/firebase.config';
import { OrphanageData } from '../types/types';

const getOrphanagesList = async () => {
  try {
    const snapshot = await get(child(ref(database), '/data/orphanages'));
    if (snapshot.exists()) {
      return snapshot.val();
    } else {
      throw new Error('Orphanage not found');
    }
  } catch (error) {
    console.error('Error getting orphanage:', error);
    throw error;
  }
};

const getOrphanageDetails = async (id: number) => {
  try {
    const snapshot = await get(child(ref(database), '/data/orphanages'));

    if (snapshot.exists()) {
      const orphanages: OrphanageData[] = snapshot.val();
      const orphanage = Object.values(orphanages).find(
        (o) => Number(o.id) === Number(id)
      );
      if (orphanage) {
        return orphanage;
      }
    } else {
      throw new Error('Orphanage not found');
    }
  } catch (error) {
    console.error('Error getting orphanage:', error);
    throw error;
  }
};

export { getOrphanagesList, getOrphanageDetails };
