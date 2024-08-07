const convertTimeToMinutes = time => {
  if (typeof time !== 'string' || !time) {
    return 0;
  }

  const [value, unit] = time.split(' ');
  const numValue = parseFloat(value);

  if (unit && unit.startsWith('hour')) {
    return numValue * 60;
  } else if (unit && unit.startsWith('day')) {
    return numValue * 1440;
  } else {
    return numValue;
  }
};

export const getColorByKey = (key, value) => {
  const minutes = convertTimeToMinutes(value);

  switch (key) {
    case 'cycleTime':
      return minutes < 73 * 60
        ? 'green'
        : minutes < 155 * 60
          ? 'blue'
          : minutes < 304 * 60
            ? 'yellow'
            : 'red';
    case 'codingTime':
      return minutes < 19 * 60
        ? 'green'
        : minutes < 44 * 60
          ? 'blue'
          : minutes < 99 * 60
            ? 'yellow'
            : 'red';
    case 'pickUp':
      return minutes < 7 * 60
        ? 'green'
        : minutes < 13 * 60
          ? 'blue'
          : minutes < 24 * 60
            ? 'yellow'
            : 'red';
    case 'review':
      return minutes < 5 * 60
        ? 'green'
        : minutes < 14 * 60
          ? 'blue'
          : minutes < 29 * 60
            ? 'yellow'
            : 'red';
    case 'deploy':
      return minutes < 6 * 60
        ? 'green'
        : minutes < 50 * 60
          ? 'blue'
          : minutes < 137 * 60
            ? 'yellow'
            : 'red';
    case 'prSize':
      return parseFloat(value) < 219
        ? 'green'
        : parseFloat(value) < 395
          ? 'blue'
          : parseFloat(value) < 793
            ? 'yellow'
            : 'red';
    default:
      return 'red';
  }
};
