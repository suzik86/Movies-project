import React from 'react';

export default class Two extends React.Component {
  
  render() {
  
    console.log(process.env.REACT_APP_CLIENT_ID); 
    console.log(process.env.REACT_APP_KEY);
    console.log(process.env.NODE_ENV);

    return <h2>Two</h2>;
  }    
};


