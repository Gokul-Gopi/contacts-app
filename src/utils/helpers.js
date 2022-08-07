//generates random 6 digits
export const generateOtp = () => {
  return Math.floor(100000 + Math.random() * 900000);
};

//extracts error message from the response
export const getErrorMessage = (error) => {
  let message =
    error?.response?.data?.message ||
    error?.response?.message ||
    error?.response?.statusText ||
    error?.message ||
    "Something went wrong!";

  return message;
};
