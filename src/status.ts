import statusData from './status/status.json';
import { Status } from './statusInterface';

// Load status data
const statusList: Status = statusData as Status;

// Function to get the description of a status code
export const getStatusDescription = (code: number): string => {
  for (const category of statusList) {
    const status = category.codes.find((c) => c.code === code);
    if (status) {
      return status.description;
    }
  }
  return 'Unknown Status Code';
};

// Function to check if a status code is a server error
export const isServerError = (code: number): boolean => {
  return code >= 500 && code < 600;
};

// Function to check if a status code is a client error
export const isClientError = (code: number): boolean => {
  return code >= 400 && code < 500;
};

// Function to check if a status code indicates success
export const isSuccess = (code: number): boolean => {
  return code >= 200 && code < 300;
};

// Function to check if a status code indicates redirection
export const isRedirection = (code: number): boolean => {
  return code >= 300 && code < 400;
};

// Function to check if a status code indicates informational
export const isInformational = (code: number): boolean => {
  return code >= 100 && code < 200;
};
