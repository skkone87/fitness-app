import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out Limitless, the only intimate space for women workouts</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/happyGirls3.jpeg'
              text='This is the live we choose,to be happy!!'
              label='Limitless'
              path='/contact'
            />
            <CardItem
              src='images/elinsiting_3.jpg'
              text='Happyily Training with the women!!'
              label='Happy'
              path='/'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/elin2gil.jpg'
              text='You only live once, so live as if there is no tomorrow!!'
              label='Live life'
              path='/calendar'
            />
            <CardItem
              src='images/elinswapup.jpg'
              text='Limitless is with you starting to end'
              label='Limitless'
              path='/contact'
            />
            <CardItem
              src='images/elin4women.jpg'
              text='Experience some good warn up technique'
              label='Limitless'
              path='/contact'
            />
            
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
