import React from 'react'
import { Hero } from '../Components/Hero/Hero'
import { NewCollections } from '../Components/NewCollections/NewCollections'
import { Newsletter } from '../Components/Newsletter/Newsletter'


export const Shop = () => {
  return (
    <div>
      <Hero/>
      <NewCollections/>
      <Newsletter/>
    </div>
  )
}