import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Auctions from './components/Auctions';

class Home extends Component {
  render() {
    return (
      <div className="main">
        <Header />
        <Auctions />
      </div>
    );
  }
}

export default Home;