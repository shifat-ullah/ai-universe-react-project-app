// eslint-disable-next-line no-unused-vars
import React from 'react';
import Header from './Header';
import Button from './Button';
import Card from './Card';

const App = () => {
  return (
    <div>
      <Header></Header>
      <Button >Sort By Date</Button>
      {/* <Button >See More</Button>
      <Button >Sifat</Button> */}

      <Card></Card>

      {/* <Button >See More</Button> */}



    </div>
  );
};

export default App;