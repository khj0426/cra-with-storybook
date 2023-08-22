import { ChangeEvent } from 'react';
import styled from 'styled-components';

const Input = styled.input`
  width: 100%;
  padding: 4px 8px;
  border: 1px solid gray;
  border-radius: 4px;
  box-sizing: border-box;
`;

const SearchBox = ({ onSearch }: { onSearch: (search: string) => void }) => {
  return (
    <Input
      onChange={(e: ChangeEvent<HTMLInputElement>) => {
        onSearch(e.target.value);
      }}
    />
  );
};
export default SearchBox;
