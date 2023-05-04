import { React, Component } from 'react';
import './App.css';
import Cart from './Component/Cart';
import ListProduct from './Component/ListProduct';
import Notify from './Component/Notify';
import Title from './Component/Title';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          {/* TITLE : START */}
          <Title />
          {/* TITLE : END */}
          <div className="row">
            {/* LIST PRODUCT : START */}
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
              <ListProduct />
            </div>
            {/* LIST PRODUCT : END */}
            {/* CART : START */}
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
              <Cart />
              <Notify />
            </div>
            {/* CART : END */}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
