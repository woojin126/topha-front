import { Button, Divider, TextField } from '@material-ui/core';
import { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { checkNewUser } from '../../apis/Auth';
import { getUserInfo, updateUser } from '../../apis/User';

import { authAtom } from '../../states/auth';
import { userAtom } from '../../states/user';
import './signup.scss';
export type Tech = {
  value: string;
  label: string;
};

const techList: Tech[] = [
  {
    value: 'front',
    label: '프론트엔드',
  },
  {
    value: 'backend',
    label: '백엔드',
  },
];
export const SignUp: React.FunctionComponent = () => {
  const history = useHistory();
  const [check, setCheck] = useState<boolean>(false);
  const [specialty, setSpecialty] = useState<string>(techList[0].value);
  const [userName, setUserName] = useState<string>('');
  const setAuth = useSetRecoilState(authAtom);
  const setUser = useSetRecoilState(userAtom);
  const token = new URL(window.location.href).searchParams.get('token');

  const handleAuth = async () => {
    localStorage.setItem('access_token', token as string);
    setAuth(token as string);
    const data = await getUserInfo(token);
    if (data) {
      setUser(data);
    }
  };

  useEffect(() => {
    checkNewUser(token)
      .then(({ data, status }) => {
        if (status === 400 || status === 404) {
          alert('There is error on Server');
          history.push('/');
        }

        if (!data.data) {
          handleAuth();
          history.push('/');
        } else {
          setCheck(true);
        }
      })
      .catch((error) => {
        alert(`There is error on Server. Error : ${error}`);
        history.push('/');
      });
  }, []);

  const onChangeTech = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setSpecialty(event.target.value as string);
    },
    [setSpecialty]
  );

  const onChangeName = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setUserName(event.target.value as string);
    },
    [setUserName]
  );

  const onComplete = () => {
    updateUser(token, userName, specialty)
      .then(() => {
        handleAuth();
        history.push('/');
      })
      .catch((error) => {
        alert(`There is error on Server. Error : ${error}`);
        history.push('/');
      });
  };

  return (
    <div className="sign-wrapper">
      {check ? (
        <div>
          <h2>내 정보 입력하기</h2>
          <Divider className="divider" />

          <div className="input">
            <span className="label">닉네임</span>
            <TextField
              className="field"
              required
              type="text"
              variant="outlined"
              size="small"
              value={userName}
              onChange={onChangeName}
            />
          </div>

          <div className="input">
            <span className="label">개발 분야</span>
            <TextField
              className="field"
              select
              type="text"
              variant="outlined"
              size="small"
              defaultValue="front"
              value={specialty}
              onChange={onChangeTech}
            >
              {techList.map((tech) => (
                <option key={tech.value} value={tech.value}>
                  {tech.label}
                </option>
              ))}
            </TextField>
          </div>

          <Button className="complete-button" onClick={onComplete}>
            완료
          </Button>
          <Divider className="divider" />
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};
