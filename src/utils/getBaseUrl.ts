import config from '../config';

export const baseUrl = () => {
  if (config.env === 'development') {
    return 'http://localhost:5000';
  }
  if (config.env === 'production') {
    return config.base_url;
  }
  // return 'http://localhost:5000';
};
