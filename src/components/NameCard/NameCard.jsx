import './NameCard.css';
import React from 'react';
const nameCheapUrl = 'https://www.namecheap.com/domains/registration/results/?domain=';
const NameCard = ({suggestedName}) => {
    return (
        <a 
            href={`${nameCheapUrl}${suggestedName}`}
            target="_blank"
            rel="noreferrer"
            className="card-link">
            <div className="name-card">
                <p className="result-name">
                    {suggestedName}
                </p>
            </div>
        </a>
    );
};

export default NameCard;