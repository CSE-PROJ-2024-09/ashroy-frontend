import { useEffect, useState } from "react";
import ItemCard from "../components/global/ItemCard";
import SectionHeader from "../components/global/SectionHeader";
import { AnimalWelfareData } from "../types/types";
import { getAnimalWelfaresList } from "../apis/animalWelfareAPI";
import Loader from "../components/global/Loader";

const AnimalWelfare = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [animalWelfares, setAnimalWelfares] = useState<
    AnimalWelfareData[] | []
  >([]);
  const [isError, setIsError] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredList, setFilteredList] = useState<AnimalWelfareData[] | []>(
    []
  );

  useEffect(() => {
    if (searchTerm.length > 0) {
      const tempList = animalWelfares.filter(
        (animalWelfare: AnimalWelfareData) =>
          animalWelfare.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredList([...tempList]);
    } else {
      setFilteredList([...animalWelfares]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm]);

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);
    getAnimalWelfaresList()
      .then((res) => {
        const data = res;
        setIsLoading(false);
        setIsError(false);
        if (data) {
          setAnimalWelfares([...data]);
          setFilteredList([...data]);
        }
      })
      .catch((error) => {
        setIsLoading(false);
        if (error) {
          setIsError(true);
        }
      });
  }, []);

  return (
    <>
      <SectionHeader title="Animal Welfares" />
      <div className="input-group mb-3 mt-3">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e?.target?.value);
          }}
          className="form-control"
          placeholder="Search here.."
          aria-label="Search here..."
          aria-describedby="button-addon2"
        />
        <button className="btn btn-dark" type="button" id="button-addon2">
          Search
        </button>
      </div>
      <div className="row mt-4">
        {isLoading ? (
          <Loader />
        ) : isError ? (
          <div>
            <h4 className="text-center text-muted">No data found!</h4>
          </div>
        ) : filteredList.length > 0 ? (
          filteredList.map((animalWelfare: AnimalWelfareData) => (
            <div className="col-md-6" key={animalWelfare.id}>
              <ItemCard
                id={animalWelfare.id}
                type="animal-welfare"
                image={animalWelfare.image}
                name={animalWelfare.name}
                location={animalWelfare.location}
              />
            </div>
          ))
        ) : (
          <div>
            <h4 className="text-center text-muted">No data found!</h4>
          </div>
        )}
      </div>
    </>
  );
};

export default AnimalWelfare;
