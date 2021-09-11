import { Button, Divider, TextField } from '@material-ui/core';
import { ChangeEvent, useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { getUserInfo, updateUser } from '../../apis/User';
import { authAtom } from '../../states/auth';
import { userAtom } from '../../states/user';
import { Tech } from '../sign/SignUp';
import './user.scss';

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

export const User: React.FunctionComponent = () => {
  const history = useHistory();
  const [specialty, setSpecialty] = useState<string>(techList[0].value);
  const [userName, setUserName] = useState<string>('');
  const auth = useRecoilValue(authAtom);
  const setUser = useSetRecoilState(userAtom);
  const user = useRecoilValue(userAtom);
  console.log(user);
  const handleAuth = async () => {
    const data = await getUserInfo(auth);
    if (data) {
      setUser(data);
    }
  };

  const onComplete = () => {
    if (userName == '') {
      alert('닉네임이 비어있습니다.');
      return;
    }

    updateUser(auth, userName, specialty)
      .then(() => {
        handleAuth();
        history.push('/');
      })
      .catch((error) => {
        alert(`There is error on Server. Error : ${error}`);
        history.push('/');
      });
  };

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

  return (
    <div className="user-wrapper">
      <h2>내 정보 입력하기</h2>
      <Divider className="divider" />

      <div className="sign-input">
        <span className="label">닉네임</span>

        <TextField
          className="field"
          required
          type="text"
          variant="outlined"
          size="small"
          fullWidth
          value={userName}
          onChange={onChangeName}
        />
      </div>

      <div className="sign-input">
        <span className="label">개발 분야</span>
        <TextField
          className="field"
          select
          type="text"
          fullWidth
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

      <div className="button-wrapper">
        <Button
          className="back-button"
          onClick={() => {
            history.push('/');
          }}
        >
          뒤로가기
        </Button>

        <Button className="complete-button" onClick={onComplete}>
          수정하기
        </Button>
      </div>

      <Divider className="divider" />
    </div>
  );
};
