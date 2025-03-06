import React, { useState } from 'react';
import Banner from './Banner';
import Input from './Input';
import List from './List';

function App() {
  const[source, setSource] = useState([]);

  return (
    <div style={{ backgroundColor: "#F1F1F1", fontFamily: "'Poppins', sans-serif" }}>
      <Banner />
      <Input source={source} setSource={setSource} />
      <List source={source} setSource={setSource} />
    </div>
  );
}

export default App;
