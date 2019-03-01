import React, { Component } from 'react';
import {Provider} from 'react-redux';
import store from './redux/store';
import { BrowserRouter } from 'react-router-dom';

import Main from './containers/Main';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div >
            <Main/>   
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

store.subscribe(() => {
  console.log("running", store.getState());
});

export default App;

