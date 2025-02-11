// src/api/api.ts
import axios from 'axios';

const API_BASE_URL = 'https://swapi.dev/api';

export const fetchResources = async (resource: string = 'people') => {
  const response = await axios.get(`${API_BASE_URL}/${resource}/`);
  return response.data;
};

export const fetchResourceDetail = async (resource: string, id: string) => {
  const response = await axios.get(`${API_BASE_URL}/${resource}/${id}/`);
  return response.data;
};

export const fetchEnrichmentData = async (url: string) => {
  const response = await axios.get(url);
  return response.data;
};
