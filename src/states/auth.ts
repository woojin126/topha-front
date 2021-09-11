import { atom } from 'recoil';

const authAtom = atom({
  key: 'auth',
  default: localStorage.getItem('access_token'),
});

export { authAtom };
