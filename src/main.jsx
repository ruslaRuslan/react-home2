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

// const rootElement = document.getElementById('root')

// function a(ad, imgUrl) {
//   return <> <h1>salam {ad}</h1>
//     <p>alekum salam </p>
//     <img src={imgUrl} alt={`${ad}-in shiri!`} />
//   </>
// }

// ReactDOM.createRoot(rootElement).render(
//   <>
//     {a("Ruslan", "https://images.unsplash.com/photo-1707026791615-3692b538cefa?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D")}
//     {a("Ali", "https://images.unsplash.com/photo-1706464006091-4eeb35d54bdf?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D")}

//   </>

// )

// --------------------------------------------------------------------------------------------------------------------------


// const rootElement = document.getElementById('root')

// function a({imgUrl, ad}) {
//   return <> <h1>salam {ad}</h1>
//     <p>alekum salam </p>
//     <img src={imgUrl} alt={`${ad}-in shiri!`} />
//   </>
// }

// ReactDOM.createRoot(rootElement).render(
//   <>
//     {a({
//       ad: "Ruslan", imgUrl: "https://images.unsplash.com/photo-1707026791615-3692b538cefa?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D"
//     })}
//     {a({
//       imgUrl: "https://images.unsplash.com/photo-1706464006091-4eeb35d54bdf?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D", ad: "Ali"
//     })}

//   </>
// )


// --------------------------------------------------------------------------------------------------------------------------


// const rootElement = document.getElementById('root')

// function A({ imgUrl, ad, yas }) {
//   return <> <h1>salam {ad}</h1>
//     <p>alekum salam, menim {yas} yasim var</p>
//     <img src={imgUrl} alt={`${ad}-in shiri!`} />
//   </>
// }

// ReactDOM.createRoot(rootElement).render(
//   <>
//     <A
//       ad="rahib"
//       imgUrl="https://images.unsplash.com/photo-1706464006091-4eeb35d54bdf?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D"
//       yas={23}
//     />
//     <A
//       ad="Ruslan"
//       imgUrl="https://images.unsplash.com/photo-1707026791615-3692b538cefa?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D"
//       yas={20}

//     />
//   </>
// )

// --------------------------------------------------------------------------------------------------------------------------


const rootElement = document.getElementById('root')

function A(props) {
  return <> <h1>salam {props.ad}</h1>
    <p>alekum salam, menim {props.yas} yasim var</p>
    <img src={props.imgUrl} alt={`${props.ad}-in shiri!`} />
  </>
}

ReactDOM.createRoot(rootElement).render(
  <>
    <A
      ad="rahib"
      imgUrl="https://images.unsplash.com/photo-1706464006091-4eeb35d54bdf?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D"
      yas={23}
    />
    <A
      ad="Ruslan"
      imgUrl="https://images.unsplash.com/photo-1707026791615-3692b538cefa?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D"
      yas={20}

    />
  </>
)

