import React from 'react'
import ReactDOM from 'react-dom/client'

// const rootElement = document.getElementById('root')

// const a = <div>
//   <h1>salam</h1>
//   <p>alekum salam</p>
//   <img src="https://images.unsplash.com/photo-1709828593320-8af956395dd1?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
// </div>

// ReactDOM.createRoot(rootElement).render(
//   a
// )

// --------------------------------------------------------------------------------------------------------------------------

const rootElement = document.getElementById('root')

function a(ad, imgUrl) {
  return <> <h1>salam {ad}</h1>
    <p>alekum salam </p>
    <img src={imgUrl} alt={`${ad}-in shiri!`} />
  </>
}

ReactDOM.createRoot(rootElement).render(
  <>
    {a("Ruslan", "https://images.unsplash.com/photo-1707026791615-3692b538cefa?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D")}
    {a("Ali", "https://images.unsplash.com/photo-1706464006091-4eeb35d54bdf?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D")}

  </>

)