import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyAliouFK1J5Ftunbo0tU2Dx4sJJ1qVb-rs'

// Create a new component.  This comonent should produce some HTML.
const App = () => {
  return (
    <div>
      <SearchBar />
      </div>
    );
}

// Take this component's generated HTML and put it on the page (in the DOM).

ReactDOM.render(<App />, document.querySelector('.container'));
