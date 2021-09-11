import axios from 'axios';

export const getAllProject = async () => {
  return await axios({
    method: 'get',
    url: process.env.REACT_APP_API + `/project/selectAll`,
  });
};

export const createProject = async (token: string, data: any) => {
  console.log(data);

  return await axios({
    method: 'post',
    headers: {
      Authorization: `Bearer ${token}`,
    },
    url: process.env.REACT_APP_API + `/project/save`,
    data: { data },
  });
};
