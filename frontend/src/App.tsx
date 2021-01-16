import React from 'react';
import ReactHlsPlayer from 'react-hls-player';
import './App.css';

function App() {
  return (
    <div className="App">
      <ReactHlsPlayer
        url='http://localhost:3000/stream/music_angela_paulson_dancing_waters_007.m3u8'
        autoplay={false}
        controls={true}
        width="100%"
        height="auto"
      />
    </div>
  );
}

export default App;
