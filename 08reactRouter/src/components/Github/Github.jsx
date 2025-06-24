import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data= useLoaderData()
    // const [data,setData]=useState([])
    // useEffect(() => {
    //     fetch("https://api.github.com/users/AbhishekJaiswal6822")
    //     .then(response=> response.json())
    //     .then (data=>{
    //         console.log(data)
    //         setData(data)
    //     })
    // }, [])
    
  return (
    <div
    className='text-center bg-gray-600 m-4 text-white p-4 text-3xl ' 
    >Github followers: {data.followers}
    <img src={data.avatar_url} alt="Git Picture" width={300}  />
    </div>
  )
}

export const githubInfoLoader= async () => {
     const response = await fetch("https://api.github.com/users/AbhishekJaiswal6822")
     return  response.json()
}

export default Github