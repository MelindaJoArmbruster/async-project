import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='homePgParent'>
      <img className='banner' src='/images/thankyou-01-front.png' />

      <div className='homePgLorem'>
        <p>
          A long time ago in a galaxy far, far, away...Lorem ipsum dolor sit
          amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut tortor pretium viverra suspendisse.
          Ut ornare lectus sit amet est.
        </p>
        <p>
          Urna id volutpat lacus laoreet non curabitur gravida arcu ac. Tortor
          condimentum lacinia quis vel eros. Pharetra convallis posuere morbi
          leo.
        </p>
        <p>
          Placerat in egestas erat imperdiet sed. Accumsan tortor posuere ac ut
          consequat. Enim eu turpis egestas pretium aenean pharetra magna ac.
        </p>
      </div>
    </div>
  );
};

export default Home;
