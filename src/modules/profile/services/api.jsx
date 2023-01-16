import axios from 'axios';

const BASE_URL = process.env.REACT_APP_APIURL;

// ?sortBy=_id&sortOrder=-1&page=1&limit=10&filters={"fullName":{"value":"Nicolas","matchMode":1}}

export default {
  user(url = BASE_URL + 'user') {
    return {
      create: (newUser, access_token) =>
        axios.post(url + '/', newUser, {
          headers: {
            Authorization: access_token,
          },
        }),
      delete: (id, access_token) =>
        axios.delete(url + '/' + id, {
          headers: {
            Authorization: access_token,
          },
        }),
      fetchAll: (orderBy, page, rowsPerPage, sortOrder, input, inputField, accessToken) =>
        axios.get(
          `${url}?sortField=${orderBy}&sortOrder=${sortOrder}&page=${page}&limit=${rowsPerPage}&filters={"${input}":{"value":"${inputField}","matchMode":1}}`,
          {
            headers: {
              Authorization: accessToken,
            },
          }
        ),
      fetchById: (id, access_token) =>
        axios.get(url + '/' + id, {
          headers: {
            Authorization: access_token,
          },
        }),
      update: (id, updatedUser, access_token) =>
        axios.put(url + '/' + id, updatedUser, {
          headers: {
            Authorization: access_token,
          },
        }),
    };
  },
};
