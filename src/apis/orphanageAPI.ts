import { child, get, ref } from "firebase/database";
import { database } from "../firebase/firebase.config";
import { OrphanageData } from "../types/types";

const getOrphanagesList = async () => {
  try {
    const snapshot = await get(child(ref(database), "/data/orphanages"));
    if (snapshot.exists()) {
      const data = snapshot.val();
      const dataArray = Object.keys(data).map((key) => ({
        ...data[key],
      }));

      return [...dataArray];
    } else {
      throw new Error("Orphanage not found");
    }
  } catch (error) {
    console.error("Error getting orphanage:", error);
    throw error;
  }
};

const getOrphanageDetails = async (id: string) => {
  try {
    const snapshot = await get(child(ref(database), "/data/orphanages"));

    if (snapshot.exists()) {
      const orphanages: OrphanageData[] = snapshot.val();
      const orphanage = Object.values(orphanages).find((o) => o.id == id);
      if (orphanage) {
        return orphanage;
      }
    } else {
      throw new Error("Orphanage not found");
    }
  } catch (error) {
    console.error("Error getting orphanage:", error);
    throw error;
  }
};

export { getOrphanagesList, getOrphanageDetails };
