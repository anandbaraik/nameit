import React from 'react';
import Header from '../Header/Header';
import SearchBox from '../SearchBox/SearchBox';
import './App.css';
import ResultContainer from '../ResultContainer/ResultContainer';
import Footer from '../Footer/Footer';
const name = require('@rstacruz/startup-name-generator');
class App extends React.Component {

  constructor(){
    super();
    this.state={
      headerText: 'Name It!',
      headerExpanded: true,
      suggestedNames:[]
    };
  }

  handleInputChange = (inputText) => {
    this.setState({
      headerExpanded : !(inputText),
      suggestedNames: inputText ? name(inputText) :[]
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
        <ResultContainer suggestedNames={this.state.suggestedNames}></ResultContainer>
        <Footer></Footer>
      </>
    );
  }
}

export default App
  
