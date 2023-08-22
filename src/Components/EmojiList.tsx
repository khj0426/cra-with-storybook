import styled from 'styled-components';
import EmojiListItem from './EmojiItem';
import type { Emoji } from '../@types';

const Container = styled.ul`
  width: 100%;
  padding: 0;
`;

const EmojiList = ({
  emojiList,
  keyword,
}: {
  emojiList: Emoji[];
  keyword: string;
}) => {
  return (
    <Container>
      {emojiList
        .filter(
          (emoji) =>
            emoji.title.indexOf(keyword) >= 0 ||
            emoji.keywords.indexOf(keyword) >= 0
        )
        .slice(0, 10)
        .map((emoji) => (
          <EmojiListItem key={emoji.title} emoji={emoji} />
        ))}
    </Container>
  );
};

export default EmojiList;
