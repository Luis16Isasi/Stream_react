import React, { Fragment } from 'react';

import { Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';

//importamos nuestros componentes
import StreamList from './components/streams/StreamList';
import StreamCreate from './components/streams/StreamCreate';
import StreamDelete from './components/streams/StreamDelete';
import StreamShow from './components/streams/StreamShow';
import StreamEdit from './components/streams/StreamEdit';

//importamos history de history.js
import history from './history';

//hacemos styles globales
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body{
        font-family: 'Roboto', sans-serif;  
    }
    
`;

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Router history={history}>
        <Header />
        <Switch>
          <Route exact path='/' component={StreamList} />
          <Route exact path='/streams/new' component={StreamCreate} />
          <Route exact path='/streams/delete/:id' component={StreamDelete} />
          <Route exact path='/streams/show' component={StreamShow} />
          <Route exact path='/streams/edit/:id' component={StreamEdit} />
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
