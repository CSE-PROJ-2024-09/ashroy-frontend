import { useEffect, useState } from 'react';
import ItemCard from '../components/global/ItemCard';
import SectionHeader from '../components/global/SectionHeader';
import { ShelterHomeData } from '../types/types';
import { getShelterHomeList } from '../apis/ShelterHomeAPI';
import Loader from '../components/global/Loader';

const ShelterHome = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [shelterHomes, setShelterHomes] = useState<ShelterHomeData[] | []>([]);
  const [isError, setIsError] = useState<boolean>(false);

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
      <SectionHeader title='Elderly Cares' />
      <div className='row mt-4'>
        {isLoading ? (
          <Loader />
        ) : isError ? (
          <div>
            <h4 className='text-center text-muted'>No data found!</h4>
          </div>
        ) : (
          shelterHomes.length > 0 &&
          shelterHomes.map((shelterHome) => (
            <div className='col-md-6' key={shelterHome.id}>
              <ItemCard
                image={shelterHome.image}
                name={shelterHome.name}
                location={shelterHome.location}
                website={`/shelter-home/${shelterHome.id}`}
              />
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default ShelterHome;
