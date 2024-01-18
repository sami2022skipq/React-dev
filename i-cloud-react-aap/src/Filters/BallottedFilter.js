import React, { useState } from 'react';

const BallotedFilter = (props) => {
    const { setballoted } = props
    const [selectedOption, setSelectedOption] = useState('All');

    // const handleOptionChange = (e) => {
    //     console.log(selectedOption)
    // };
    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
        setballoted(e.target.value)
    }


    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log('Selected Option:', selectedOption);
    // };

    return (

        <div className="form-group">
            <div className="form-check">
                <input
                    className="form-check-input"
                    type="radio"
                    name="All"
                    value="All"
                    checked={selectedOption === 'All'}
                    onChange={handleOptionChange}
                />
                <label className="form-check-label">
                    All
                </label>
            </div>
            
            <div className="form-check">
                <input
                    className="form-check-input"
                    type="radio"
                    name="balloted"
                    value={true}
                    checked={selectedOption === 'true'}
                    onChange={handleOptionChange}
                />
                <label className="form-check-label">
                    Balloted
                </label>
            </div>
            <div className="form-check">
                <input
                    className="form-check-input"
                    type="radio"
                    name="non-balloted"
                    value={false}
                    checked={selectedOption === 'false'}
                    onChange={handleOptionChange}
                />
                <label className="form-check-label">
                    Non-Balloted
                </label>
            </div>
            
        </div>

    );
};

export default BallotedFilter;
