import React from 'react';
import ReactDOM from 'react-dom';

const API_KEY = 'AIzaSyCUCs6Mjwm0TC61YnX4peEaU0qNGfYMrf8';

// Create a new component. This component should produce HTML.
const App = () => {
  return <div> Hi! </div>;
}

// Take this component's generated HTML and put it in the DOM.
ReactDOM.render(<App />, document.querySelector('.container'));
