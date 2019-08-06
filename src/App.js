import React from 'react';
import { Switch, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import List from './components/List';
import ListQuery from './components/ListQuery';
import CreateLink from './components/CreateLink';
import RouteHeader from './components/RouteHeader';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <RouteHeader/>
        <div>
          <Switch>
            <Route exact path="/" component={List} />
            <Route exact path="/create" component={CreateLink} />
          </Switch>
        </div>
      </header>
      <section className="content">
        <h2>Normal List</h2>
        <List/>
      </section>
      <hr></hr>
      <div className="text-center">
        <h2>Graphql and Prisma)</h2>
      </div>
      <hr></hr>
      <section className="content--query">
        <h3>List (Query)</h3>
        <ListQuery/>
      </section>
      <hr></hr>
      <section className="content--mutation">
        <div className="container text-center">
          <h3>Create Link (Mutation)</h3>
          <CreateLink/>
        </div>
      </section>
      <footer className="App-footer">
        (c) Copyright - Mike Ludemann
      </footer>
    </div>
  );
}

export default App;
