import React from 'react';
import { connect } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';
import 'materialize-css/dist/css/materialize.min.css';
import './index.css';

// redux store
const reducer = combineReducers({
  color: (state = (255*255*255), action) => {
    console.log(state, action);
    const number = Math.floor(Math.random() * 255 * 255 * 255);
    return number;
  },
  counter: (state = 0, action) => {
    return state + 1;
  }
});

setInterval(() => {
  store.dispatch({type: 'NEW_COLOR'})
}, 1000);

export const store = createStore(reducer, applyMiddleware(thunk));

const AppComponent = ({color, counter}) => {

  const colorString = color.toString(16);
  const colorStringHex = '#' + colorString;

  const segments = ("0".repeat(8 - counter.toString().length) + counter.toString()).split('');

  return (
    <div className="continer">
      <header className="col-xs-12">
        <h1 className="col-xs-12 head">Every f*cking color</h1>
      </header>
      <div className="col-xs-12">
        <h5 className="col-xs-12 text-center">Global colors left:</h5>
        <div className="col-xs-12 col-sm-10 col-sm-offset-1 m-b-20 m-t-20 counter-container">
          <div className="counter">
            {segments.map((s, i) => (
               <div key={i} className="segment">{s}</div>
             ))}
          </div>
        </div>

        <div className="col-xs-12 description">
          <h5 className="col-xs-6 col-xs-offset-3 text-center">{`0x${colorString}`}</h5>
        </div>

        <div className="col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2 color m-t-20 m-b-20" style={{backgroundColor: colorStringHex}}></div>

        <div className="col-xs-12">
          <button className="col-xs-8 col-xs-offset-2 col-sm-6 col-sm-offset-3 btn btn-custom blue-grey lighten-5">Get new color!</button>
        </div>

        <div className="col-xs-12 m-t-20">
          tutaj bedzie jakis ladny opis co to jest i do czego sluzy ta ladna bardzo piekna strona
        </div>
      </div>
      {/* add gitusers */}
      <footer className="col-xs-12 m-t-10 text-center">
        Copyright © 2016 Tomasz Cichocinski & Jakub Hajto
      </footer>
    </div>
  );
}

const App = connect(
  (store) => store,
  (dispatch) => ({

  })
)(AppComponent);

export default App;
