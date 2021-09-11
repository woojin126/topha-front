import { atom, selector } from 'recoil';
import { getUserInfo } from '../apis/User';

const userAtom = atom({
  key: 'user',
  default: getUserInfo(localStorage.getItem('access_token')),
});

export { userAtom };
