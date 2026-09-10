import { useState } from 'react'
import './App.css'

const CUSTOM_HTML  = `
<h1>Hi</h1>
<div> My Name is Kyle</div>`

function App() {
  

  return (
    <>
      <div dangerouslySetInnerHTML={{_html: CUSTOM_HTML}}>
        
      </div>
      
    </>
  )
}

export default App
