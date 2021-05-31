import axios from "axios";

export const register = async (user) =>
  await axios.post(`${process.env.REACT_APP_API}/register`, user);

export const travelAgencyRegister = async (user) =>
  await axios.post(`${process.env.REACT_APP_API}/travel-agency-register`, user);

export const login = async (user) =>
  await axios.post(`${process.env.REACT_APP_API}/login`, user);

export const travelAgencyLogin = async (user) =>
  await axios.post(`${process.env.REACT_APP_API}/travel-agency-login`, user);

export const travelAgencyProfile = async (userId) =>
  await axios.get(`${process.env.REACT_APP_API}/travel-agency/${userId}`);
