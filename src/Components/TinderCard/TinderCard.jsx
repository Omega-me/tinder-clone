import React, { useEffect, useState } from 'react';
import './TinderCard.css';
import TinderCards from 'react-tinder-card';
import { db } from '../../libs/firebase';

const TinderCard = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    db.collection('people').onSnapshot(snapshot => {
      setPeople(
        snapshot.docs.map(doc => ({
          id: doc.id,
          person: doc.data(),
        }))
      );
    });
  }, []);

  return (
    <div className='tinderCard'>
      {people.map(({ id, person }) => (
        <TinderCards preventSwipe={['up', 'down']} className='swipe' key={id}>
          <div
            style={{ backgroundImage: `url(${person.url})` }}
            className='tindercard__card'>
            <h3>{person.name}</h3>
          </div>
        </TinderCards>
      ))}
    </div>
  );
};

export default TinderCard;
