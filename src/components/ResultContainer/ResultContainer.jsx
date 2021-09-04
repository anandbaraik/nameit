import './ResultContainer.css';
import React from 'react';
import NameCard from '../NameCard/NameCard';
const ResultContainer = ({suggestedNames}) => {
    const suggestedNamesJsx = suggestedNames.map((suggestedName) => {
        return <NameCard key={suggestedName} suggestedName={suggestedName}></NameCard>;
    });
    return  (
        <div className="results-container">
            {suggestedNamesJsx}
        </div>
    );
}

export default ResultContainer;