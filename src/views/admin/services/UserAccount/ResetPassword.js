import axios from 'axios';

export const ResetPassword = async (oldPassword, newPassword) => {
    try {
        const token = localStorage.getItem('sessionToken');
        if (!token) {
            return;
        }

        const response = await axios.post('http://localhost:4000/api/auth/logout', {
            oldPassword,
            newPassword 
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