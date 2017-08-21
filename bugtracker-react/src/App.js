import React, { Component } from 'react';
import MyFooter from './components/MyFooter'
import MyTitle from './components/MyTitle'
import AddNewBug from './components/AddNewBug'

class App extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <MyTitle/>
          <AddNewBug/>
          <hr />
        </div>
        <MyFooter/>
      </div>
    );
  }
}

export default App;
