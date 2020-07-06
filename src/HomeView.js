import React from 'react'
import { Link } from 'react-router-dom'

export default function HomeView() {
    return (
        <div>
           <h1>Home View</h1> 
           <Link to="/category">
               <button>Create new entry</button>
           </Link>
        </div>
    )
}
