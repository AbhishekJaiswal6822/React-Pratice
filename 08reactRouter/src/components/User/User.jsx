import {useParams} from 'react-router-dom'
import React from 'react'

function User() {
    const {userId}=useParams()
  return (
    <div className='bg-gray-700 text-white text-3xl p-4'>User:{userId}</div>
  )
}

export default User