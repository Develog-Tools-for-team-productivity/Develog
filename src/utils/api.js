export const fetchData = async (url, method, body, errorMessage) => {
  const token = localStorage.getItem('token');
  if (!token) {
    throw new Error('토큰을 찾을 수 없습니다.');
  }

  const options = {
    method: method,
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  };

  if (body) {
    options.body = JSON.stringify(body);
  }

  const response = await fetch(url, options);

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(`${errorMessage}: ${errorData.message}`);
  }

  return response.json();
};

export const fetchDateData = async (startDate, endDate) => {
  return fetchData(
    `http://localhost:5001/api/user-data?startDate=${startDate}&endDate=${endDate}`,
    'GET',
    null,
    '데이터 가져오기 실패'
  );
};
