import { Logo, TextInput } from 'components/common';
import theme from 'styles/theme';

import ButtonArea from './ButtonArea';
import Wrapper from './GNB.styled';

const GNB = () => {
  return (
    <Wrapper className="flex">
      <Logo size={2} />
      <TextInput
        size={{ height: '40px', width: '240px' }}
        placeholder="검색"
        borderRadius={theme.border.radius.gnb}
      />
      <ButtonArea />
    </Wrapper>
  );
};

export default GNB;
