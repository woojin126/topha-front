import axios from 'axios';

export const updateUser = async (token: string | null, userName: string, specialty: string) => {
  return await axios({
    method: 'post',
    url: process.env.REACT_APP_API + `/updateUser`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: {
      nickname: userName,
      specialty: specialty,
    },
  });
};

export const getUserInfo = async (token: string | null) => {
  if (token) {
    const result = await axios({
      method: 'get',
      url: process.env.REACT_APP_API + `/auth/userInfo`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(result);
    if (result.status === 200) {
      return result.data.data;
    } else {
      return null;
    }
  }
  return null;
};
