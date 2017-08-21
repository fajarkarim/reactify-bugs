import React, { Component } from 'react';
import MyFooter from './components/MyFooter'
import MyTitle from './components/MyTitle'
import AddNewBug from './components/AddNewBug'
import BugList from './components/BugList'

class App extends Component {


  render() {
    return (
      <div>
        <div className="container">
          <MyTitle/>
          <AddNewBug/>
          <hr/>
          <BugList/>
        </div>
        <MyFooter/>
      </div>
    );
  }
}

export default App;
