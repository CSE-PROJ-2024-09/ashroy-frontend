import { child, get, ref } from "firebase/database";
import { database } from "../firebase/firebase.config";
import { ShelterHomeData } from "../types/types";

const getShelterHomeList = async () => {
  try {
    const snapshot = await get(child(ref(database), "/data/shelterHomes"));
    if (snapshot.exists()) {
      const data = snapshot.val();
      const dataArray = Object.keys(data).map((key) => ({
        ...data[key],
      }));

      return [...dataArray];
    } else {
      throw new Error("shelter homes not found");
    }
  } catch (error) {
    console.error("Error getting shelter homes:", error);
    throw error;
  }
};

const getShelterHomeDetails = async (id: string) => {
  try {
    const snapshot = await get(child(ref(database), "/data/shelterHomes"));
    if (snapshot.exists()) {
      const shelters: ShelterHomeData[] = snapshot.val();
      const shelter = Object.values(shelters).find((o) => o.id == id);
      if (shelter) {
        return shelter;
      }
    } else {
      throw new Error("shelter homes not found");
    }
  } catch (error) {
    console.error("Error getting shelter homes:", error);
    throw error;
  }
};

export { getShelterHomeList, getShelterHomeDetails };
