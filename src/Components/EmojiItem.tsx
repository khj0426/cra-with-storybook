import styled from 'styled-components';
import type { Emoji } from '../@types';

const ListItem = styled.li`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 8px 0;
  border-bottom: 1px solid black;
  cursor: pointer;
`;

const Symbol = styled.div`
  font-size: 24px;
  margin-right: 16px;
`;

const Title = styled.div`
  width: 200px;
`;

const KeyWords = styled.div`
  flex: 1;
`;

const EmojiListItem = ({ emoji }: { emoji: Emoji }) => {
  return (
    <ListItem onClick={() => navigator.clipboard.writeText(emoji.symbol)}>
      <Symbol>{emoji.symbol}</Symbol>
      <Title>{emoji.title}</Title>
      <KeyWords>{emoji.keywords}</KeyWords>
    </ListItem>
  );
};
export default EmojiListItem;
