import styled from 'styled-components';

const Heading = styled.h1`
  margin: 0;
  font-size: 32px;
  text-align: center;
`;

const Header = () => {
  return <Heading>이모지 검색기</Heading>;
};

export default Header;
