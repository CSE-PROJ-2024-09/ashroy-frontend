import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAnimalWelfaresDetails } from "../apis/animalWelfareAPI";
import { AnimalWelfareData } from "../types/types";
import animalDummy from "../assets/images/animal-dummy.jpg";
import Loader from "../components/global/Loader";

const AnimalWelfareDetails = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [data, setData] = useState<AnimalWelfareData>();
  const [error, setError] = useState<string>("");

  useEffect(() => {
    setIsLoading(true);
    getAnimalWelfaresDetails(id)
      .then((res) => {
        setIsLoading(false);
        setData(res);
      })
      .catch((error) => {
        setIsLoading(false);
        console.error(error);
        setError(error);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return isLoading ? (
    <Loader />
  ) : data ? (
    <>
      <div className="card border-1 border-dark rounded-5">
        <img
          src={data.image ? data.image : animalDummy}
          className="rounded-5"
          style={{
            height: "250px",
          }}
        />
      </div>

      <h1 className="mt-2">{data.name}</h1>
      <div className="card p-3 border-dark mt-2 rounded-5 mb-3">
        <div className="row">
          <div className="col-md-6">
            <div>
              <span className="fw-bold">Email:</span> {data.email}
            </div>
            <div>
              <span className="fw-bold">Phone:</span> {data.phone}
            </div>
          </div>
          <div className="col-md-6">
            <div>
              <span className="fw-bold">Website:</span> {data.website}
            </div>
            <div>
              <span className="fw-bold">Address:</span> {data.location}
            </div>
          </div>
        </div>
      </div>
    </>
  ) : (
    error && (
      <div className="text-center">
        <h2>No data found</h2>
      </div>
    )
  );
};

export default AnimalWelfareDetails;
