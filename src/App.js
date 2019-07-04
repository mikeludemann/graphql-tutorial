import React from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/List';
import ListQuery from './components/ListQuery';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <section className="content">
        <h2>Normal List</h2>
        <List/>
      </section>
      <hr></hr>
      <section className="content--query">
        <h2>Graphql and Prisma List</h2>
        <ListQuery/>
      </section>
      <footer className="App-footer">
        (c) Copyright - Mike Ludemann
      </footer>
    </div>
  );
}

export default App;
