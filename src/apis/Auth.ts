import axios from 'axios';

export const getAccessToken = () => localStorage.getItem('access_token');
export const getRefreshToken = () => localStorage.getItem('refresh_token');
export const isAuthenticated = () => !!getAccessToken();

export const checkNewUser = async (token: string | null) => {
  return await axios({
    method: 'get',
    url: process.env.REACT_APP_API + `/checkNewUser`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

// export const refreshTokens = async () => {
//     return await axios({
//       method: 'get',
//       url: process.env.REACT_APP_API + `/checkNewUser`,
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });
// }

export const authenticate = async () => {
  if (getAccessToken()) {
    // const tokens = await refreshTokens(); // call an API, returns tokens

    // const expires = (tokens.expires_in || 60 * 60) * 1000;
    // const inOneHour = new Date(new Date().getTime() + expires);

    // // you will have the exact same setters in your Login page/app too
    // localStorage.set('access_token', tokens.access_token, { expires: inOneHour });
    // localStorage.set('refresh_token', tokens.refresh_token);

    return true;
  }

  redirectToLogin();
  return false;
};

const redirectToLogin = () => {
  window.location.replace(`/login?next=${window.location.href}`);
};

export const logout = () => {
  localStorage.removeItem('access_token');
  window.location.replace('/');
};
