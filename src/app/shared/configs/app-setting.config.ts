import { environment } from '../../../environments/environment';

const API_URL = environment.AngularDemoApiUrl;

export const appSetting = {
  GRID: {
    PAGE_SIZE: 5,
    TOTAL_PAGES: 10,
    END_PAGE: 10,
  },
  API_ENDPOINT: {
    LOGIN: API_URL + 'api/users/authenticate',
    REGISTER: API_URL + 'api/users/register',
    CUSTOMER_GETALL: API_URL + 'api/customer/getall',
    CUSTOMER_GETBYID: API_URL + 'api/customer/getcustomerbyid',
    CUSTOMER_CREATE: API_URL + 'api/customer/createcustomer',
    CUSTOMER_UPDATE: API_URL + 'api/customer/updatecustomer',
    CUSTOMER_DELETE: API_URL + 'api/customer/deletecustomer',
  },
  SESSION: {
    INACTIVITY_SESSION_TIMEOUT: 900,
    TIMEOUT_IN_SECONDS_TIME: 15
  },
};
