import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './index.css';
import reportWebVitals from './reportWebVitals';

import Header from './layout/Header';
import Content from './layout/Content';
import Footer from './layout/Footer';
import MessageButton from './layout/Chat/MessageButton';
import Home from './pages/home';
import Services from './pages/services';
import Contact from './pages/contact';

const appName = "HMA SOFTWARES";
document.getElementsByTagName("title")[0].innerText = appName;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header appName={appName} />
      <Content appName={appName}>
        <Routes>
            <Route exact path="/" element={<Home appName={appName} />} />
            <Route path="/servicos" element={<Services />} />
            <Route path="/contato" element={<Contact />} />
        </Routes>
      </Content>
      <Footer appName={appName} />
      <MessageButton />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
