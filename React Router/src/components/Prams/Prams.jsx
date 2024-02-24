import React from 'react'
import { useParams } from 'react-router-dom'

function Prams() {

  const {pramsId} = useParams()
  return (
    <div className='bg-gray-600 text-white text-3xl p-4'>Prams : {pramsId}</div>
  )
}

export default Prams