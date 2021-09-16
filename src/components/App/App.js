import React, {useState} from 'react';
import Header from '../Header/Header';
import SearchBox from '../SearchBox/SearchBox';
import './App.css';
import ResultContainer from '../ResultContainer/ResultContainer';
import Footer from '../Footer/Footer';
const name = require('@rstacruz/startup-name-generator');

const App = () => {
  const [headerText, setHeaderText] = useState('Name It!');
  const [headerExpanded, setHeaderExpanded] = useState(true);
  const [suggestedNames, setSuggestedNames] = useState([]);

  const handleInputChange = (inputText) => {
    setHeaderExpanded(!inputText);
    setSuggestedNames([inputText ? name(inputText) : []]);
  };
  
  return (
    <>
      <Header
        headerExpanded={headerExpanded}
        headerTitle={headerText}
        >
      </Header>
      <SearchBox onInputChange={handleInputChange}></SearchBox>
      <ResultContainer suggestedNames={suggestedNames}></ResultContainer>
      <Footer></Footer>
    </>
  );
};

export default App
  
