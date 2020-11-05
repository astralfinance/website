import React, { useState } from 'react';
import '../components/css/nav.css';
import NavLogo from '../assets/navlogo.png'
import { Link } from 'react-router-dom';

const Example = (props) => {

  return (
<div className="top">

  <Link to="/"><img src={NavLogo} className="nav-logo" /></Link>
  <nav class="site-nav">
    <ul>
      <li><Link to="/torq">What is</Link></li>
      <li><Link to="/tokenomics">Tokenomics</Link></li>
      <li><a href="https://discord.gg/YhnZtN">Discord</a></li>
      <li><a href="https://medium.com/@torqdefi" parent="_blank">Medium</a></li>
      <li><a href="https://github.com/torqdefi">Github</a></li>
      <li><a href="https://twitter.com/torqdefi">Twitter</a></li>
    </ul>
  </nav>
    </div>
  );
}

export default Example;