import { useEffect, useState } from 'react';
import ItemCard from '../components/global/ItemCard';
import SectionHeader from '../components/global/SectionHeader';
import { getOrphanagesList } from '../apis/orphanageAPI';
import { OrphanageData } from '../types/types';
import Loader from '../components/global/Loader';

const Orphanage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [orphanages, setOrphanages] = useState<OrphanageData[] | []>([]);
  const [isError, setIsError] = useState<boolean>(false);

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
      <SectionHeader title='Orphanages' />
      <div className='row mt-4'>
        {isLoading ? (
          <Loader />
        ) : isError ? (
          <div>
            <h4 className='text-center text-muted'>No data found!</h4>
          </div>
        ) : (
          orphanages.length > 0 &&
          orphanages.map((orphanage) => (
            <div className='col-md-6' key={orphanage.id}>
              <ItemCard
                image={orphanage.image}
                name={orphanage.name}
                location={orphanage.location}
                website={`/orphanage/${orphanage.id}`}
              />
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default Orphanage;
