import React from 'react';
import { connect, Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';
import 'materialize-css/dist/css/materialize.min.css';
import './index.css';

import { dispatchSocketMessage } from './socket';

/*
   counter starts at 256^3 - 1
 */
const MAX_COLOR = 256 * 256 * 256 - 1;

/*
   redux store handing all actions
 */
export const store = createStore(combineReducers({

  color: (state = -1, action) => {
    if(action.type === 'NEXT_COLOR')
      return action.color;

    return state;
  },

  counter: (state = MAX_COLOR, action) => {
    if(action.type === 'UPDATE_COUNTER')
      return MAX_COLOR - action.counter;

    return state;
  }

}), applyMiddleware(thunk));

/*
   whole page is one React component
 */
const AppComponent = ({ color, counter, getNextColor }) => {

  let colorString = (color).toString(16);
  colorString = "0".repeat(6 - colorString.length) + colorString;

  const colorStringHex = '#' + colorString;

  const segments = ("0".repeat(8 - counter.toString().length) + counter.toString()).split('');


  const Content = () => (
    <div className="col-xs-12">
      <h5 className="col-xs-12 text-center">Global colors left:</h5>
      <div className="col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 col-lg-6 col-lg-offset-3 m-b-20 m-t-20 counter-container">
        <div className="counter">
          {segments.map((s, i) => (
             <div key={i}>{s}</div>
           ))}
        </div>
      </div>

      <div className="col-xs-12 description">
        <h5 className="col-xs-6 col-xs-offset-3 text-center">{`0x${colorString}`}</h5>
      </div>

      <div
        className="col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 col-lg-4 col-lg-offset-4 color m-t-20 m-b-20"
        style={{backgroundColor: colorStringHex}}>
      </div>

      <div className="col-xs-12">
        <button
          className="col-xs-8 col-xs-offset-2 col-sm-6 col-sm-offset-3 col-md-6 col-md-offset-3 col-lg-4 col-lg-offset-4 btn btn-custom blue-grey lighten-5"
          onClick={getNextColor} >
          Get next color!
        </button>
      </div>

      <div className="col-xs-12 m-t-20 text-center">
        tutaj bedzie jakis ladny opis co to jest i do czego sluzy ta bardzo piekna strona


        <p>Page inspired by <a href="https://twitter.com/everycolorbot">Every Color</a></p>
        <p>
          {' Created by '}
          <a href="https://github.com/baransu">Tomasz Cichocinski</a>
          {' & '}
          <a href="https://github.com/Hajto">Jakub Hajto</a>
        </p>
      </div>
    </div>
  );

  const Loader = () => (
    <div className="col-xs-12" style={{marginTop: '20%'}}>
      <div className="sk-folding-cube">
        <div className="sk-cube1 sk-cube"></div>
        <div className="sk-cube2 sk-cube"></div>
        <div className="sk-cube4 sk-cube"></div>
        <div className="sk-cube3 sk-cube"></div>
      </div>
    </div>
  );

  return (
    <div className="app">
      <header className="col-xs-12">
        <h1 className="col-xs-12">Every HEX color</h1>
      </header>

      {color == -1 ? <Loader /> : <Content/>}

    </div>
  );
}

/*
   react-redux connect to subscribe for state changes
 */
const AppWithConnect = connect(
  // we're passing color and counter from store
  ({ counter, color }) => ({
    color, counter
  }),

  {
    getNextColor: () => {
      return dispatch => {
        dispatchSocketMessage('get')
          .then(res => dispatch({ type: 'NEXT_COLOR', color: res.color }))
          .catch(err => dispatch({type: 'ERR'}))
      }
    }
  }

)(AppComponent)

/*
   react-redux store provider with AppComponent as children, Provider provides store to children so they can subscibe for state changes
 */
const App = () => (
  <Provider store={store}>
    <AppWithConnect />
  </Provider>
);

export default App;
