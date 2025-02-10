import axios from 'axios';
const uri =  `${process.env.VUE_APP_ORIGIN}/api/`;

export const ResetPasswordService = async (oldPassword, newPassword) => {
    try {

        const token = localStorage.getItem('sessionToken');
        if (!token) {
            return;
        }
        
        const response = await axios.post(uri + 'recover-password/resetPassword', {
            oldPassword,
            newPassword,
            token,
        }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        return response.data;

    } catch (error) {
        console.error('Error al cerrar sesión:', error.response ? error.response.data : error.message);
    }
};