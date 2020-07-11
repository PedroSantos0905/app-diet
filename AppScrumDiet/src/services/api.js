import axios from 'axios';

const api = axios.create({
  baseURL: 'http://rest-api-scrum-diet.herokuapp.com',
  //baseURL: 'http://10.0.2.2:5554',
});

export default api;
