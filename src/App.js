import React, { Component } from 'react';
import Search from './components/search'

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <Search/>
        </header>
      </div>
    );
  }
}

export default App;
