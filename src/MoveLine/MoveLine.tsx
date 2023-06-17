import React from 'react';
import starIcon from '../assets/images/icons/start.svg';
import './MoveLine.scss';

export function MoveLine() {

  const texts = [
    'App design',
    'UI design',
    'graphic design',
    'web design'
  ];

  return <div className="move-line">
    <div className="move-line-items">
      <div className="move-line-movable">
        {new Array(10).fill(0).map((_, index) => {
          return texts.map((text) => {
            return <div className="move-line-item" key={text}>
              {text}
              <img src={starIcon} alt="" />
            </div>
          })
        })

        }
      </div>
    </div>
  </div>;
}
