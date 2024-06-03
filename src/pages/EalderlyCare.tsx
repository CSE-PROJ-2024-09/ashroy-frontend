import { useEffect, useState } from 'react';
import ItemCard from '../components/global/ItemCard';
import SectionHeader from '../components/global/SectionHeader';
import { ElderlyCareData } from '../types/types';
import { getElderlyCareList } from '../apis/elderlyCareAPI';
import Loader from '../components/global/Loader';

const EalderlyCare = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [elderlyCares, setElderlyCares] = useState<ElderlyCareData[] | []>([]);
  const [isError, setIsError] = useState<boolean>(false);

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
          elderlyCares.length > 0 &&
          elderlyCares.map((elderlyCare) => (
            <div className='col-md-6' key={elderlyCare.id}>
              <ItemCard
                image={elderlyCare.image}
                name={elderlyCare.name}
                location={elderlyCare.location}
                website={`/elderly-care/${elderlyCare.id}`}
              />
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default EalderlyCare;
