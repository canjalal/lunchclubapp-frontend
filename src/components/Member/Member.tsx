import { useState } from 'react'
import './Member.css'

interface MemberProps {
    id: number
}

function Member({ id } : MemberProps) {

  return (
    <div>
        Welcome Member {id}!
    </div>
  )
}

export default Member;