import axios from 'axios';

const API_URL = 'http://your-backend-url/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to requests if available
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const authService = {
  login: async (email: string, password: string) => {
    const response = await api.post('/auth/login', { email, password });
    if (response.data.token) {
      localStorage.setItem('token', response.data.token);
    }
    return response.data;
  },

  register: async (email: string, password: string) => {
    const response = await api.post('/auth/register', { email, password });
    return response.data;
  },

  verifyEmail: async (email: string, code: string) => {
    const response = await api.post('/auth/verify-email', { email, code });
    return response.data;
  },

  requestPasswordReset: async (email: string) => {
    const response = await api.post('/auth/request-reset', { email });
    return response.data;
  },

  resetPassword: async (email: string, code: string, newPassword: string) => {
    const response = await api.post('/auth/reset-password', {
      email,
      code,
      newPassword,
    });
    return response.data;
  },

  logout: () => {
    localStorage.removeItem('token');
  },
};

export const deviceService = {
  getDevices: async () => {
    const response = await api.get('/devices');
    return response.data;
  },

  addDevice: async (deviceData: { name: string; chipId: string }) => {
    const response = await api.post('/devices', deviceData);
    return response.data;
  },

  updateDevice: async (id: string, deviceData: { name: string; chipId: string }) => {
    const response = await api.put(`/devices/${id}`, deviceData);
    return response.data;
  },

  deleteDevice: async (id: string) => {
    const response = await api.delete(`/devices/${id}`);
    return response.data;
  },

  requestPairingCode: async () => {
    const response = await api.post('/devices/pairing-code');
    return response.data;
  },

  pairDevice: async (pairingData: { chipId: string; code: string }) => {
    const response = await api.post('/devices/pair', pairingData);
    return response.data;
  },
};