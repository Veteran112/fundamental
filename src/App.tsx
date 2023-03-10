import React from 'react';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import Page from './Page/Page';

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Sidebar />
        <Page />
      </div>
    </div>
  );
}

export default App;
