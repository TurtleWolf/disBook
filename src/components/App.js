import React from 'react';
// import logo from '../shared/images/logo.svg';
import Home from './Home/Home';
// Layout Components
import Header from '../shared/components/layout/Header';
import Content from '../shared/components/layout/Content';
import Footer from '../shared/components/layout/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header title="Welcome to disBook" />
      <Content>
        <Home />
      </Content>

      <Footer />
    </div>
  );
}

export default App;
