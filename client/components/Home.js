import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='homePgParent'>
      <img className='banner' src='/images/thankyou-01-front.png' />

      <div className='homePgLorem'>
        <p>
          Welcome to Gratitude, where sending a simple thank-you is just that -
          simple! You won't have to go to the store, waste time and money on an
          expensive card, only to get home to discover that you are out of
          postage stamps. Ugh!
        </p>
        <p>
          Instead, why not browse online in the comfort of your own home? Choose
          one of our beautiful postcards, personalize your message and click
          send. No more hunting postage stamps and putting something in the mail
          box! Your recipient gets a friendly reminder of your gratitude and you
          get more time to do other things! Win, win!
        </p>
        <p>
          Click the link at the top of this page to view our selection of
          stunning cards today!
        </p>
      </div>
    </div>
  );
};

export default Home;
