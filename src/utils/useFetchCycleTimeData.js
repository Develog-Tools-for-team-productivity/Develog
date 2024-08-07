import { useState, useCallback } from 'react';

export const useFetchCycleTimeData = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchCycleTimeData = useCallback(async (startDate, endDate) => {
    setIsLoading(true);
    setError(null);

    try {
      const token = localStorage.getItem('token');
      const response = await fetch(
        `http://localhost:5001/api/user-data?startDate=${startDate}&endDate=${endDate}`,
        {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error('데이터 가져오기 실패');
      }

      const data = await response.json();
      setIsLoading(false);
      return data;
    } catch (err) {
      setError(err.message);
      setIsLoading(false);
      throw err;
    }
  }, []);

  return { fetchCycleTimeData, isLoading, error };
};
