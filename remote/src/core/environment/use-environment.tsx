// useEnvironment.js
import { useState, useEffect } from 'react';
import useFetch from '../hooks/use-fetch';

export default function useEnvironment() {
  const [loadingEnvironment, setLoadingEnvironment] = useState(true);
  const [environmentData, setEnvironmentData] = useState(null);
  const { data: environment, loading, error } = useFetch('./config/environment.json');

  useEffect(() => {
    if (!loading && environment) {
      setLoadingEnvironment(false);
      setEnvironmentData(environment);
    }
    if (error) {
      console.error('Error al cargar configuración:', error);
    }
  }, [loading, environment, error]);

  return { loadingEnvironment, environmentData };
}
