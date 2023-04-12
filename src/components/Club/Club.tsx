import { useState } from 'react'
import './Club.css'

interface ClubProps {
    id: number
}

function Club({ id } : ClubProps) {

  return (
    <div>
      Welcome to Club {id}!
    </div>
  )
}

export default Club;