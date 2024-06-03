import { useEffect, useState } from 'react';
import ItemCard from '../components/global/ItemCard';
import SectionHeader from '../components/global/SectionHeader';
import { AnimalWelfareData } from '../types/types';
import { getAnimalWelfaresList } from '../apis/animalWelfareAPI';
import Loader from '../components/global/Loader';

const AnimalWelfare = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [animalWelfares, setAnimalWelfares] = useState<
    AnimalWelfareData[] | []
  >([]);
  const [isError, setIsError] = useState<boolean>(false);

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
      <SectionHeader title='Animal Welfares' />
      <div className='row mt-4'>
        {isLoading ? (
          <Loader />
        ) : isError ? (
          <div>
            <h4 className='text-center text-muted'>No data found!</h4>
          </div>
        ) : (
          animalWelfares.length > 0 &&
          animalWelfares.map((animalWelfare) => (
            <div className='col-md-6' key={animalWelfare.id}>
              <ItemCard
                image={animalWelfare.image}
                name={animalWelfare.name}
                location={animalWelfare.location}
                website={`/animal-welfare/${animalWelfare.id}`}
              />
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default AnimalWelfare;
