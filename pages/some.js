//how to use passport ?
import Router from 'next/router'
import React from 'react'
// import { Router } from 'react-router-dom'
import Layout from '../components/layout'

export default function Some() {
    // async function logout(){
    //     await fetch("./api/logout")
    //     console.log("logout")
    //     // Router.push("/")
    //     Router.push("/")
    // }


    
    
  return (
    <>
      
       {/* <button onClick={logout}>LOG OUT</button> */}
       <a href="/api/logout">Logout</a>
        
    </>
        
  )
}
