import React, { Component } from 'react';

import styles from '../stylesheets/card.scss';

const Card = ({props}) => {

  // const state = {
  //         picture: 'https://cdn-bnokp.nitrocdn.com/QNoeDwCprhACHQcnEmHgXDhDpbEOlRHH/assets/static/optimized/rev-f9654ed/online-decorating/wp-content/uploads/2020/07/Modern-apartment-decor-for-a-rustic-studio-unit.jpg',
  //         address: {
  //           street1: '100 West 31st Street',
  //           street2: '#18D',
  //           city: 'New York City',
  //           state: 'NY',
  //           zipCode: '10036',
  //         },
  //         roommate: {
  //           gender: 'no-preference',
  //         },
  //         description: {
  //           BR: 1,
  //           BA: 1,
  //           sqft: 450,
  //           pets: true,
  //           smoking: false,
  //           parking:false,
  //           condition: 'Slightly used'
  //         },
  //         moveInDate: new Date().toString,
  //         utilities: 159,
  //         rent: 4700,
  //         bio:'Located at 100 West 31st Street, EOS offers distinctive residences, curated amenities, and the personalized service needed to engage New York City life to the fullest inside and out. Premier recreation and relaxation facilities for residents to enjoy include a pool, fitness center on the lower level, as well as a game room and entertaining areas on the towers 47th floor with sweeping views of Manhattan. EOS offers 375 smoke-free rental residences consisting of studios, one, two, and two bedroom + den layouts. Each apartment contains a washer/dryer, dishwasher, hardwood floors, and kitchens and bathrooms with premium finishes and fixtures.' 
  //       }

  let {
        picture,
        address,
        roommate,
        description,
        moveInDate,
        utilities,
        rent,
        bio
      } = props;
      // } = state;
    
  if (picture === undefined) picture = 'https://mindfuldesignconsulting.com/wp-content/uploads/2017/07/Fast-Food-Restaurant-Branding-with-Interior-Design.jpg';

  console.log('picture', String(picture))

  if (description.condition === undefined) description.condition = 'Slightly used';

  return (
    <>
      <div className='card'>
        <div className="header">
          <div className="img">
            <img src={picture} alt='insert sweet looking apartment'></img>
          </div>
          <div className="data">
            <p className='address'>{address.street1} {address.street2}</p>
            <p className='address cityState'>{address.city}, {address.state} {address.zipCode}</p>

            <p className='rent'><span className='bold'>Rent: </span> ${rent}/mo</p>
            <p><span className='bold'>Utilities: </span> ${utilities}/mo</p>
            <p><span className='bold'>Condition: </span> {description.condition}</p>
            <p><span className='bold'>Move-in Date: </span>{moveInDate.slice(0,10)}</p>
          </div>
        </div>
        <div className="info">
          <p><span className='bold'>{description.BR}BR | {description.BA}BA | {description.sqFt} sqft</span></p>
          <p>Roommate seeking: {roommate.gender}</p>
          <><label>Pet friendly: </label><input type={'checkbox'} checked={description.pets}></input></>
          <br/>
          <><label>Smoker friendly: </label><input type={'checkbox'} checked={description.smoking}></input></>
          <br/>
          <><label>Parking availability: </label><input type={'checkbox'} checked={description.parking}></input></>
          <p className='bio'>{bio}</p>
        </div>
      </div>
    </>
  )

}

export default Card;