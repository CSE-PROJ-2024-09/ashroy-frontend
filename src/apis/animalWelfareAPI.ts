import { child, get, ref } from "firebase/database";
import { database } from "../firebase/firebase.config";
import { AnimalWelfareData } from "../types/types";

const getAnimalWelfaresList = async () => {
  try {
    const snapshot = await get(child(ref(database), "/data/animalWelfares"));
    if (snapshot.exists()) {
      const data = snapshot.val();
      const dataArray = Object.keys(data).map((key) => ({
        ...data[key],
      }));

      return [...dataArray];
    } else {
      throw new Error("Animal Welfare not found");
    }
  } catch (error) {
    console.error("Error getting animal welfare:", error);
    throw error;
  }
};

const getAnimalWelfaresDetails = async (id: string) => {
  try {
    const snapshot = await get(child(ref(database), "/data/animalWelfares"));

    if (snapshot.exists()) {
      const animalWelfares: AnimalWelfareData[] = snapshot.val();
      const animalWelfare = Object.values(animalWelfares).find(
        (o) => o.id == id
      );
      if (animalWelfare) {
        return animalWelfare;
      }
    } else {
      throw new Error("Animal Welfare not found");
    }
  } catch (error) {
    console.error("Error getting animal welfare:", error);
    throw error;
  }
};

export { getAnimalWelfaresList, getAnimalWelfaresDetails };
