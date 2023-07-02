import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/SideMenu';
import Footer from './components/Footer';
import Home from './pages/Home';
import { MainContainer, Content } from './styles/MainContainer';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <MainContainer>
        <Content>
          <Routes>
            <Route exact path="/" element={<Home />} />
          </Routes>
        </Content>
        <Sidebar />
      </MainContainer>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
