import React, { useEffect, useState } from 'react'

function Github() {
    const [data, setData] = useState([])
    useEffect(() => {
     fetch('https://api.github.com/users/Shivam-Chaniyara')
     .then(response => response.json())
     .then(data => {
        console.log(data);
        setData(data)
     })
    }, [])
    
  return (
    <div className='text-center m-4 p-4 text-3xl'>
        <p>Github Name : {data.name}</p>
        <div className='flex justify-center m-16'>
            <img className='rounded-full border-black border-2' src={data.avatar_url} alt="Git picture" width={300} />
        </div>
    </div>
  )
}

export default Github