import React from 'react';
import Bear from '../assets/card/bear.png';
// import camel from '../assets/card/camel.png';
// import cat from '../assets/card/cat.png';
// import chick from '../assets/card/chick.png';
// import chicken from '../assets/card/chicken.png';
// import cow from '../assets/card/cow.png';
// import dolphin from '../assets/card/dolphin.png';
// import elephant from '../assets/card/elephant.png';
// import fish from '../assets/card/fish.png';
// import frog from '../assets/card/frog.png';
// import horse from '../assets/card/horse.png';
// import kitty from '../assets/card/kitty.png';
// import koala from '../assets/card/koala.png';
// import monkey from '../assets/card/monkey.png';
// import frog from '../assets/card/penguin.png';
// import frog from '../assets/card/pig.png';
// import frog from '../assets/card/porcupine.png';
// import frog from '../assets/card/puffer-fish.png';
// import frog from '../assets/card/rabbit.png';
// import frog from '../assets/card/rat-head.png';

const Card = ({ card }: { card: string }) => {
  return (
    <div>
      {/* 앞면 */}
      <img src={Bear} alt={card} />
    </div>
  );
};

export default Card;
