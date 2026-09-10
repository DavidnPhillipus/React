import { useState } from 'react'
import User from './User'
import './App.css'

function App() {

  return (
    <>
      <h1>User List</h1>
      {isLoading ? (
      <h2>Loading...</h2> ) :(
        <ul>
          {users.map( user => {
            return <User key = {user.id} {...user} />
          })}
        </ul>
      )}  </>
  )
}

export default App
