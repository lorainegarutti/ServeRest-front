import axios from 'axios';

import Utils from './utils';

async function login(email, password) {
  return axios
    .post(`${Utils.getBaseUrl()}/login`, {
      email,
      password,
    });
}

export default login;
