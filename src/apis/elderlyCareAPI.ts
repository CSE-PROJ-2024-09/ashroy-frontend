import { child, get, ref } from "firebase/database";
import { database } from "../firebase/firebase.config";
import { ElderlyCareData } from "../types/types";

const getElderlyCareList = async () => {
  try {
    const snapshot = await get(child(ref(database), "/data/elderlyCares"));
    if (snapshot.exists()) {
      const data = snapshot.val();
      const dataArray = Object.keys(data).map((key) => ({
        ...data[key],
      }));

      return [...dataArray];
    } else {
      throw new Error("elderly cares not found");
    }
  } catch (error) {
    console.error("Error getting elderly cares:", error);
    throw error;
  }
};

const getElderlyCareDetails = async (id: string) => {
  try {
    const snapshot = await get(child(ref(database), "/data/elderlyCares"));
    if (snapshot.exists()) {
      const elderlyCares: ElderlyCareData[] = snapshot.val();
      const elderlyCare = Object.values(elderlyCares).find((o) => o.id == id);
      if (elderlyCare) {
        return elderlyCare;
      }
    } else {
      throw new Error("elderly cares not found");
    }
  } catch (error) {
    console.error("Error getting elderly cares:", error);
    throw error;
  }
};

export { getElderlyCareList, getElderlyCareDetails };
