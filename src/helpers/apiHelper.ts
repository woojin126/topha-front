import axios from 'axios';
import { useRecoilState } from 'recoil';
import { authAtom } from '../states/auth';

export const useFetch = () => {
  const [auth, setAuth] = useRecoilState(authAtom);

  const request = (method: string) => {
    return (url: string, body?: any) => {
      const options: any = {
        method,
        url: url,
        headers: authHeader(url),
      };

      if (body) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(body);
      }

      console.log(options);
      return axios(options).then(handleResponse).catch(handleError);
    };
  };

  const authHeader = (url: string) => {
    const token = auth;
    const isLoggedIn = !!token;
    const isApiUrl = url.startsWith(process.env.REACT_APP_API ?? '');
    if (isLoggedIn && isApiUrl) {
      return { Authorization: `Bearer ${token}` };
    } else {
      return {};
    }
  };

  const handleResponse = (res: any) => {
    return res.text().then((text: any) => {
      if (!res.ok) {
        if ([401, 403].includes(res.status) && auth) {
          localStorage.removeItem('user');
          setAuth(null);
        }

        const error = res.statusText;
        return Promise.reject(error);
      }

      return text;
    });
  };

  const handleError = (error: Error) => {
    if (process.env.DEBUG_ERROR) {
      console.error(error.stack);
    }
  };

  return {
    get: request('get'),
    post: request('post'),
  };
};
