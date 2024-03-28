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

export function formatName(ad) {
    return `Ms. ${ad}`
}

function App({ ad, imgUrl, yas }) {
    return <>
        <h1>salam {formatName(ad)}</h1>
        <p>alekum salam, menim {yas} yasim var</p>
        <img src={imgUrl} alt={`${ad}-in shiri!`} />
    </>
}

export default App
