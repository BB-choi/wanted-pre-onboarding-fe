import { useRef, useState, useEffect } from 'react';

import { Logo, TextInput } from 'componenets/common';
import theme from 'styles/theme';
import storageUtils from 'utils/storage';
import isEmpty from 'utils/utils';

import { Wrapper, ButtonLink } from './Login.style';

const { setLocalStorage, getLocalStorage } = storageUtils;

const LOCAL_STORAGE_KEY_NAME = 'Bstagram_login';

const saveLoginData = (data) => setLocalStorage(LOCAL_STORAGE_KEY_NAME, data);
const getLoginData = getLocalStorage(LOCAL_STORAGE_KEY_NAME);

const Login = () => {
  const [isDisabled, setIsDisabled] = useState(true);

  const $inputId = useRef(null);
  const $inputPw = useRef(null);

  useEffect(() => {
    $inputId.current.focus();
  }, [$inputId]);

  return (
    <Wrapper>
      <div className="login-area flex">
        <Logo />
        <div className="login-input-area">
          <TextInput
            placeholder="전화번호, 사용자 이름 또는 이메일"
            size={{ height: '36px', width: '100%' }}
            borderStyle={theme.border.linear}
            borderRadius={theme.border.radius.login}
            ref={$inputId}
          />
          <TextInput
            placeholder="비밀번호"
            size={{ height: '36px', width: '100%' }}
            borderStyle={theme.border.linear}
            borderRadius={theme.border.radius.login}
            ref={$inputPw}
          />
        </div>
        <ButtonLink
          to="/"
          onClick={() => {
            const currentId = $inputId.current.value;
            const currentPw = $inputPw.current.value;

            if (isEmpty(currentId)) {
              alert('사용자 정보를 입력해주세요.');
              $inputId.current.focus();
              return;
            }

            if (isEmpty(currentPw)) {
              alert('비밀번호를 입력해주세요.');
              $inputPw.current.focus();
              return;
            }
          }}
          disabled={isDisabled}
        >
          로그인
        </ButtonLink>
      </div>
    </Wrapper>
  );
};

export default Login;
