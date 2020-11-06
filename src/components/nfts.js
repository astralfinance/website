import React, { useState } from 'react';
// import '../components/css/header.css'
import Nft from '../assets/hunterflesh.jpg'
const Nfts= (props) => {


    return (
      <>
   
    <div className="nft">

      
    <section className="the-nft">
<p>Hunter "Flesh" Thompson</p>
<p className="para">This is our first NFT and will only be minted for our presale whitelisters.</p>
<center>
     <img src={Nft} style={{ height: '700px', width: '520px'}} /></center>
    <a href="https://opensea.io/assets/0xd07dc4262bcdbf85190c01c996b4c06a461d2430/71255"> <br /><p>Listen to audio on OpenSea</p> </a>

    </section>


    </div>
    </>
  );
}

export default Nfts;