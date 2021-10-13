import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Profile from '../components/Profile';

const Perfil = () => (
  <div>
    <Header pageName="Perfil" hasLupa={ false } />
    <div className="main">
      <Profile />
    </div>
    <Footer />
  </div>
);

export default Perfil;
