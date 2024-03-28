import React from 'react'
import ReactDOM from 'react-dom/client'

const rootElement = document.getElementById('root')

const a = <div>
  <h1>salam</h1>
  <p>alekum salam</p>
  <img src="https://images.unsplash.com/photo-1709828593320-8af956395dd1?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
</div>

ReactDOM.createRoot(rootElement).render(
a
)
