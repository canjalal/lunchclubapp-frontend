import { useState } from 'react'
import './Restaurant.css'

interface RestaurantProps {
    id: number
}

function Restaurant({ id } : RestaurantProps) {

  return (
    <div>
        Welcome Restaurant {id}!
    </div>
  )
}

export default Restaurant;