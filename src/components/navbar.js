import React, { useState } from 'react';
import './navbar.css';
import NavLogo from '../assets/navlogo.png'
import { Link } from 'react-router-dom';

const Example = (props) => {

  return (
<div className="top">

  <a href="/"><img src={NavLogo} className="nav-logo" /></a>
  <nav class="site-nav">
    <ul>
      <li><Link to="/">Astral Home</Link></li>
      <li><Link to="/faq">FAQ</Link></li>
      <li><Link to="/tokenomics">Tokenomics</Link></li>
      <li><a href="/nfts">NFTs</a></li>
      <li><a href="https://t.me/astralfinance" target="_blank" rel="noopener noreferrer">Telegram</a></li>
      <li><a href="https://github.com/astralfinance" target="_blank" rel="noopener noreferrer">Github</a></li>
      <li><a href="https://twitter.com/astralfinance" target="_blank" rel="noopener noreferrer">Twitter</a></li>
    </ul>
  </nav>
    </div>
  );
}

export default Example;