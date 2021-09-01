import React from 'react';
import Header from '../Header/Header';
import SearchBox from '../SearchBox/SearchBox';
import './App.css';
class App extends React.Component {
  render() {
    return (
      <>
        <Header></Header>
        <SearchBox></SearchBox>
      </>
    );
  }
}

export default App
  
