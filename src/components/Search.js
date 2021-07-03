import React, { useState } from 'react';
import './Search.css';
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer';

function Search({ hideButtons = false }) {
   const [{ }, dispatch] = useStateValue();

   const [input, setInput] = useState("");
   const history = useHistory();

   const search = (event) => {
      event.preventDefault();
      console.log("Search Button Clicked:", input);

      if (input === '') return;

      dispatch({
         type: actionTypes.set_and_save_search_term,
         term: input
      });

      //submit input to actually search for results
      history.push('/search');
   }

   return (
      // Changed this parent div to a form to allow for the input to log its value by enter clicks
      <form className='search'>
         <div className='search-input'>
            <SearchIcon className='search-input-icon' />
            <input value={input} onChange={(event) => { setInput(event.target.value); }} />
            <MicIcon />
         </div>

         {!hideButtons ?
            <div className='search-buttons'>
               {/* Add an onClick event to add an actual search function */}
               <Button type="submit" onClick={search} variant='outlined'>Google Search</Button>
               {/* The button below gets transformed to an a element with the href */}
               <Button href='https://www.google.com/doodles' target='blank' variant='outlined'>I'm Feeling Lucky</Button>
            </div>
            :
            <div className='search-buttons'>
               <Button className='search-buttons-hidden' type="submit" onClick={search} variant='outlined'>Google Search</Button>
               <Button className='search-buttons-hidden' href='https://www.google.com/doodles' target='blank' variant='outlined'>I'm Feeling Lucky</Button>
            </div>
         }
      </form>
   )
}

export default Search
