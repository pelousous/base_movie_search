import React, {useState} from 'react';

const SearchBar = ({onSubmitSearch}) => {
    const [term, setTerm] = useState('');

    const onInputChange = (e) => {
        setTerm(e.target.value)
    }

    const onFormSubmit = (e) => {
        e.preventDefault();

        onSubmitSearch(term);
    }

    return (
            <div className="ui segment">
                <form className="ui form" onSubmit={onFormSubmit}>
                    <div className="field">
                        <label>Search a Movie</label>
                        <input type="text" value={term} onChange={onInputChange} />
                    </div>
                </form>
            </div>        
    )
}

export default SearchBar;