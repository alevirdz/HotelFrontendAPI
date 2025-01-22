import axios from 'axios';
const uri =  `${process.env.VUE_APP_ORIGIN}/api/`;

export const RecoveryPasswordByURL = async (email) => {
    const response = await axios.post(uri + 'recover-password', {
        email: email,
      });

    return response;
};

export const ResetPasswordByURL = async (token, resetPassword) => {
  const response = await axios.post(uri + 'recover-password/reset-password-by-link', {
    token: token,  
    resetPassword: resetPassword,
    });

  return response;
};