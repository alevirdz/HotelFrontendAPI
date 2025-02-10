import { jwtDecode } from "jwt-decode";

export function isTokenValid() {
  const token = localStorage.getItem('sessionToken');
  if (!token) {
    return false;
  }

  try {
    const decoded = jwtDecode(token);
    
    console.log(decoded)
    const expirationTime = decoded.exp * 1000; //milisegundos

    const currentTime = Date.now();
    return currentTime < expirationTime; // Si la hora actual es antes de la expiración, el token es válido

  } catch (error) {
    return false;
  }
}
