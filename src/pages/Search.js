import React, { useState } from 'react'
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import { button } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import { useStateValue } from '../StateProvider'
import { actionTypes } from '../reducer'

import './Search.css'

function Search({ hideButtons = false}) {
    const [dispatch] = useStateValue();
    const [input, setInput] = useState("");
    const history = useHistory();

    const search = (e) => {
        e.preventDefault();

        dispatch({
            type:actionTypes.SET_ACTION_TERM,
            term:input
        });

        history.push('/search');
    }

    return (
        <form className="search">
            <div className="search__input">
                <SearchIcon className="search__inputIcon"/>
                <input value={input} onChange={e=>setInput(e.target.value)} />
                <MicIcon/>
            </div>
            {!hideButtons ? (
                <div className="search__buttons">
                <button type="submit" onClick={search} variant="outlined">Google Search</button>
                <button variant="outlined">I'm Feeling Lucky</button>
            </div>
            ):(
                <div className="search__buttons">
                <button className="search__buttonHidden" type="submit" onClick={search} variant="outlined">Google Search</button>
                <button className="search__buttonHidden" variant="outlined">I'm Feeling Lucky</button>
            </div>
            )}
            
        </form>
    )
}

export default Search
