import Header from './Components/Header';
import SearchBox from './Components/SearchBox';
import EmojiList from './Components/EmojiList';
import { useState } from 'react';
import emojiJson from './emojiList.json';

function App() {
  const [keyword, setKeyWord] = useState('');

  return (
    <div className="App">
      <Header />
      <SearchBox onSearch={setKeyWord} />
      <EmojiList emojiList={emojiJson} keyword={keyword} />
    </div>
  );
}

export default App;
