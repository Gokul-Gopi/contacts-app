//generates random 6 digits
export const generateOtp = () => {
  return Math.floor(100000 + Math.random() * 900000);
};
