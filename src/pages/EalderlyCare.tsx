import { useEffect, useState } from "react";
import ItemCard from "../components/global/ItemCard";
import SectionHeader from "../components/global/SectionHeader";
import { ElderlyCareData } from "../types/types";
import { getElderlyCareList } from "../apis/elderlyCareAPI";
import Loader from "../components/global/Loader";

const EalderlyCare = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [elderlyCares, setElderlyCares] = useState<ElderlyCareData[] | []>([]);
  const [isError, setIsError] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredList, setFilteredList] = useState<ElderlyCareData[] | []>([]);

  useEffect(() => {
    if (searchTerm.length > 0) {
      const tempList = elderlyCares.filter((elderlyCare: ElderlyCareData) =>
        elderlyCare.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredList([...tempList]);
    } else {
      setFilteredList([...elderlyCares]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm]);

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);
    getElderlyCareList()
      .then((res) => {
        const data = res;
        setIsLoading(false);
        setIsError(false);
        if (data) {
          setElderlyCares([...data]);
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
      <SectionHeader title="Elderly Cares" />
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
          filteredList.map((elderlyCare: ElderlyCareData) => (
            <div className="col-md-6" key={elderlyCare.id}>
              <ItemCard
                image={elderlyCare.image}
                name={elderlyCare.name}
                location={elderlyCare.location}
                id={elderlyCare.id}
                type="elderly-care"
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

export default EalderlyCare;
