import axios from 'axios';
const uri =  `${process.env.VUE_APP_ORIGIN}/api/auth/`;

export const loginUserService = async (email, password) => {
  const response = await axios.post(uri + 'signin', {
    email: email,
    password: password,
  });

  return response.data;
}


export const logoutUserService = async () => {
  const token = localStorage.getItem('sessionToken');
  if (!token) {
    return;
  }

  const response = await axios.post(uri + 'logout', {}, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });  

  return response.data;
};