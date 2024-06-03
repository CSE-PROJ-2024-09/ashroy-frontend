import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getShelterHomeDetails } from '../apis/ShelterHomeAPI';
import { ShelterHomeData } from '../types/types';
import Loader from '../components/global/Loader';

const ShelterHomeDetails = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [data, setData] = useState<ShelterHomeData>();
  const [error, setError] = useState<string>('');

  useEffect(() => {
    setIsLoading(true);
    getShelterHomeDetails(Number(id))
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
      <div className='card border-1 border-dark rounded-5'>
        <img
          src={data.image}
          className='rounded-5'
          style={{
            height: '250px',
          }}
        />
      </div>

      <h1 className='mt-2'>{data.name}</h1>
      <div className='card p-3 border-dark mt-2 rounded-5 mb-3'>
        <div className='row'>
          <div className='col-md-6'>
            <div>
              <span className='fw-bold'>Email:</span> {data.email}
            </div>
            <div>
              <span className='fw-bold'>Phone:</span> {data.phone}
            </div>
            <div>
              <span className='fw-bold'>Website:</span> {data.website}
            </div>
          </div>
          <div className='col-md-6'>
            <div>
              <span className='fw-bold'>Capacity:</span> {data.capacity}
            </div>
            <div>
              {' '}
              <span className='fw-bold'>Current Children:</span>{' '}
              {data.current_residents}
            </div>
            <div>
              <span className='fw-bold'>Address:</span> {data.location}
            </div>
          </div>
        </div>
      </div>
      <h4>Description</h4>
      <p className='mb-3 text-muted'>{data.description}</p>
      <h4>Our Services</h4>
      <ul className='row'>
        {data.services.map((service) => (
          <li className='col-md-6' key={service}>
            {service}
          </li>
        ))}
      </ul>
    </>
  ) : (
    error && (
      <div className='text-center'>
        <h2>No data found</h2>
      </div>
    )
  );
};

export default ShelterHomeDetails;
