import axios from 'axios';

const uri = `${process.env.VUE_APP_ORIGIN}/api/theme/`;

export const themesServices = async () => {
  const token = localStorage.getItem('sessionToken');
  if (!token) {
    return null;
  }
  const response = await axios.get(uri + 'get-current-theme', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

export const themesListServices = async () => {
  const token = localStorage.getItem('sessionToken');
  if (!token) {
    return null;
  }
  const response = await axios.get(uri + 'all', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};


export const updateThemeService = async (themeId) => {
  const token = localStorage.getItem('sessionToken');
  if (!token) {
    return null;
  }

  const requestData = {
    themeSelected: themeId.toString(),
  };
  const response = await axios.post(uri + 'update-theme', requestData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};