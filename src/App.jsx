// export function App({ ad, imgUrl, yas }) {
//     return <>
//         <h1>salam {ad}</h1>
//         <p>alekum salam, menim {yas} yasim var</p>
//         <img src={imgUrl} alt={`${ad}-in shiri!`} />
//     </>
// }

// ----------------------------------------------------------------------------------------------------------------------------


//  function App({ ad, imgUrl, yas }) {
//     return <>
//         <h1>salam {ad}</h1>
//         <p>alekum salam, menim {yas} yasim var</p>
//         <img src={imgUrl} alt={`${ad}-in shiri!`} />
//     </>
// }

// export default App

// ----------------------------------------------------------------------------------------------------------------------------

// export function formatName(ad) {
//     return `Ms. ${ad}`
// }

// function App({ ad, imgUrl, yas }) {
//     return <>
//         <h1>salam {formatName(ad)}</h1>
//         <p>alekum salam, menim {yas} yasim var</p>
//         <img src={imgUrl} alt={`${ad}-in shiri!`} />
//     </>
// }

// export default App


// ----------------------------------------------------------------------------------------------------------------------------

import Button from "./components/Button"
import Header from "./components/Header"
import Home from "./Home"
function App() {
    return (

        <>
            <Header title="hello world" />

            <Button
                title="click me"
                text="salam react-a xos geldin"
            />
            <Button
                title="click me2"
                text="salam react-a xos geldin2"
            />


            <Home />
        </>

    )
}

export default App