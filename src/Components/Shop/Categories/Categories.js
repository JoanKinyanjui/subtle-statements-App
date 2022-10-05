import React from 'react';
import ShopLayout from '../ShopLayout/ShopLayout';
import './Categories.css'
import CardObject from '../CardObject/CardObject';
import axios from 'axios';

function Categories() {

  return (<>
  <ShopLayout />
    <div className='Categories'>
<CardObject />
  </div>
  </>
  )
}

export default Categories;