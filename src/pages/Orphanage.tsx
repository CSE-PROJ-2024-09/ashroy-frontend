import { useEffect, useState } from "react";
import ItemCard from "../components/global/ItemCard";
import SectionHeader from "../components/global/SectionHeader";
import { getOrphanagesList } from "../apis/orphanageAPI";
import { OrphanageData } from "../types/types";
import Loader from "../components/global/Loader";

const Orphanage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [orphanages, setOrphanages] = useState<OrphanageData[] | []>([]);
  const [isError, setIsError] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredList, setFilteredList] = useState<OrphanageData[] | []>([]);

  useEffect(() => {
    if (searchTerm.length > 0) {
      const tempList = orphanages.filter((orphanage: OrphanageData) =>
        orphanage.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredList([...tempList]);
    } else {
      setFilteredList([...orphanages]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm]);

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);
    getOrphanagesList()
      .then((res) => {
        const data = res;
        setIsLoading(false);
        setIsError(false);
        if (data) {
          setOrphanages([...data]);
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
      <SectionHeader title="Orphanages" />
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
          filteredList.map((orphanage: OrphanageData) => (
            <div className="col-md-6" key={orphanage.id}>
              <ItemCard
                image={orphanage.image}
                name={orphanage.name}
                location={orphanage.location}
                id={orphanage.id}
                type="orphanage"
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

export default Orphanage;
