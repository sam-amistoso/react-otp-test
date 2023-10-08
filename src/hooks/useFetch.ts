import { useState } from 'react';
import apiFetch from '../services/apiFetch';
import { IEndpoint } from '../interfaces/IEndpoint';
const useFetch = () => {
  const [isPending, setIsPending] = useState(false);

  async function fetchData<T>(idToken: string, endpoint: IEndpoint): Promise<T | undefined> {
    if (idToken) {
      setIsPending(true);
      const response = await apiFetch<T>(endpoint, idToken)
        .then((res) => {
          if (res.status === 200) {
            setIsPending(false);
            return res.data;
          }
          throw Error('Token expired or Failed to authorize');
        })
        .catch((error) => {
          let message;
          if (error instanceof Error) message = error.message;
          else message = String(error);
          setIsPending(false);
          throw message;
        });
      if (response) return response;
    }
  }

  return { isPending, fetchData };
};

export default useFetch;
