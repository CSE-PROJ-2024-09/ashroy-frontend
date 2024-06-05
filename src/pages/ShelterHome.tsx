import { useEffect, useState } from "react";
import ItemCard from "../components/global/ItemCard";
import SectionHeader from "../components/global/SectionHeader";
import { ShelterHomeData } from "../types/types";
import { getShelterHomeList } from "../apis/ShelterHomeAPI";
import Loader from "../components/global/Loader";

const ShelterHome = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [shelterHomes, setShelterHomes] = useState<ShelterHomeData[] | []>([]);
  const [isError, setIsError] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredList, setFilteredList] = useState<ShelterHomeData[] | []>([]);

  useEffect(() => {
    if (searchTerm.length > 0) {
      const tempList = shelterHomes.filter((shelterHome: ShelterHomeData) =>
        shelterHome.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredList([...tempList]);
    } else {
      setFilteredList([...shelterHomes]);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm]);

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);
    getShelterHomeList()
      .then((res) => {
        const data = res;
        setIsLoading(false);
        setIsError(false);
        if (data) {
          setShelterHomes([...data]);
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
          filteredList.map((shelterHome: ShelterHomeData) => (
            <div className="col-md-6" key={shelterHome.id}>
              <ItemCard
                image={shelterHome.image}
                name={shelterHome.name}
                location={shelterHome.location}
                id={shelterHome.id}
                type="shelter-home"
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

export default ShelterHome;
