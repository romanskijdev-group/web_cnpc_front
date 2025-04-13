import axios from 'axios';
import Cookies from 'js-cookie';

export const GetUserNotifications = async (): Promise<ArrayApiResponse<NotificationResponseData>> => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const token = Cookies.get('accessToken');

  if (!backendUrl) {
    throw new Error('Backend URL is not defined');
  }

  if (token === undefined || token == '') {
    throw new Error('Invalid token auth');
  }

  const response = await axios.get(`${backendUrl}/api/notifications`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return response.data;
};


// export const UpdateUserNotifications = async (): Promise<ArrayApiResponse<NotificationResponseData>> => {
//   const backendUrl = import.meta.env.VITE_BACKEND_URL;
//   const token = Cookies.get('accessToken');

//   if (!backendUrl) {
//     throw new Error('Backend URL is not defined');
//   }

//   if (token === undefined || token == '') {
//     throw new Error('Invalid token auth');
//   }

//   const response = await axios.put(`${backendUrl}/api/notifications`, {
//     headers: {
//       Authorization: `Bearer ${token}`
//     }
//   });
//   return response.data;
// };