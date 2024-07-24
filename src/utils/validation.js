export const isEmailValid = email => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

export const isPasswordStrong = password => {
  return password.length >= 8;
};
