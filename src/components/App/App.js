import React from 'react';
import Header from '../Header/Header';
import SearchBox from '../SearchBox/SearchBox';
import './App.css';
class App extends React.Component {

  constructor(){
    super();
    this.state={
      headerText: 'Name It!',
      headerExpanded: true
    };
  }

  handleInputChange = (inputText) => {
    this.setState({
      headerExpanded : !(inputText)
    });
  };

  render() {
    return (
      <>
        <Header
          headerExpanded={this.state.headerExpanded}
          headerTitle={this.state.headerText}
          >
        </Header>
        <SearchBox onInputChange={this.handleInputChange}></SearchBox>
      </>
    );
  }
}

export default App
  
