import React from 'react';
import './App.css';
import { Button, } from 'react-bootstrap';
import News from './components/News/News';
import Header from './components/Header/Header';
import TopHeadline from './components/TopHeadline/TopHeadline';

function App() {
  return (
    <div>
      <Header></Header>
      <TopHeadline></TopHeadline>
      <News></News>
    </div>
  );
}

export default App;
