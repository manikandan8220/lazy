//1
//2

// import React from 'react'
// import Header from './Component/Header'
// import Footer from './Component/Footer'

// function App() {
//   return (
//     <>
//     <Header/>
//     <Footer/>
//     </>
//   )
// }

// export default App


//3

// import React from 'react'
// import Header from './Component/Header'
// import { Suspense } from 'react';
// const Footer =React.lazy(() =>import('./Component/Footer'))

// function App() {
//   return (
//    <>
//     <div>
//       <h1>Hii the main component</h1>

//       <Header/>

//       <Suspense fallback={<div> Loading Footer....!!</div>}></Suspense>
//     </div>
//    </>
//   )
// }

// export default App


//4


// import React, { Suspense } from 'react';
// const Header =React.lazy (()=>import('./Component/Header'))
// import Footer from './Component/Footer'

// function App() {
//   return (
//     <>
//     <div>
//       <h1>For the Component page.....!!!</h1>
//       <Suspense fallback ={<div> for loading....</div>}>
//           <Footer/>
//       </Suspense>
//     </div>
//     </>
//   )
// }

// export default App



//5


// import React, { Suspense } from 'react'

// const Header =React.lazy(()=> import('./Component/Header'));
// const Footer =React.lazy(()=> import('./Component/Footer'));

// function App() {
//   return (
//     <>
//      <div>Hii for the Header component....!!!</div>

//      <Suspense fallback ={<div>For the Loading......!!</div>}>
//        <Header/>
//      </Suspense>


//      <div>Hii for the Footer component....!!!</div>

//      <Suspense fallback ={<div>For the Loading.......!!!</div>}>
//         <Footer/>
//      </Suspense>

//     </>
//   )
// }
// export default App


//6


// import React, { Suspense } from 'react'
// import ErrorBoundary from './Component1/Errorboundry';
// const Header =React.lazy(()=> import('./Component/Header'));
// const Footer =React.lazy(()=> import('./Component/Footer'));

// function App() {
//   return (
//     <>
//      <div>Hii for the Header component....!!!</div>

//   <ErrorBoundary>
//      <Suspense fallback ={<div>For the Loading......!!</div>}>
//        <Header/>
//      </Suspense>
//   </ErrorBoundary>

//      <div>Hii for the Footer component....!!!</div>
//   <ErrorBoundary>
//      <Suspense fallback ={<div>For the Loading.......!!!</div>}>
//         <Footer/>
//      </Suspense>
//  </ErrorBoundary>
//     </>
//   )
// }
// export default App


//7


// import React, { Suspense } from 'react'
// import {BrowserRouter, Routes,Route, Router,} from 'react-router-dom';
// const Home =React.lazy (()=> import('./Component2/Home'))
// const About =React.lazy(() => import('./Component2/About'))
// function App() {
//   return (
//      <>
//      <BrowserRouter>
//       <div>
//         <h1>Lazy Loaded Routes Example</h1>
//             <Suspense fallback={<div>Loading...</div>}>
//               <Routes>
//                 <Route path="/" element={<Home />} />
//                 <Route path="/About" element={<About />} />
//               </Routes>
//             </Suspense>
//       </div>
//      </BrowserRouter>
//      </>
//   )
// }

// export default App


//8

// import React, { useState } from 'react'

// function App() {
//   const [result,setResult] =useState(null)

//   const handleClick =async ()=> {
//     const { add } = await import('./Component3/Calculate'); 
//     setResult(add(5, 3));
//   }

//   return (
//       <>
//        <div>
//            <button onClick={handleClick}>add 5+3</button>
//            {result !== null && <p>Result: {result}</p>}
//        </div>
//       </>
//   )
// }

// export default App



//9

// import React, { useState } from 'react';

// function App() {
//   const [result, setResult] = useState(null);

//   const handleMultiply = async () => {
//     const { multiply } = await import('./Component3/Calculate1'); 
//     setResult(multiply(4, 6));
//   };

//   return (
//     <div>
//       <button onClick={handleMultiply}>Multiply 4 × 6</button>
//       {result !== null && <p>Result: {result}</p>}
//     </div>
//   );
// }

// export default App;


// task

// import React, { Suspense } from 'react'
// const Sidebar =React.lazy(()=> import('./Component5/sidebar'));
// const Header =React.lazy(()=> import('./Component5/Header'));
// const Contact =React.lazy(()=> import('./Component5/Contact'));

// function App() {
//   return (
//     <>
//      <div>Hii for the Header component....!!!</div>
  
    
//      <Suspense fallback ={<div>For the Loading......!!</div>}>
//        <Sidebar/>
//      </Suspense>
 

//      <Suspense fallback ={<div>For the Loading......!!</div>}>
//        <Header/>
//      </Suspense>
  

//      <div>Hii for the Footer component....!!!</div>
  
//      <Suspense fallback ={<div>For the Loading.......!!!</div>}>
//         <Contact/>
//      </Suspense>

//     </>
//   )
// }
// export default App



//task2


// import React, { Suspense, useState } from 'react'
// const Gal1 =React.lazy(()=> import('./Component6/Gal1'));
// const Gal2 =React.lazy(()=> import('./Component6/Gal2'));

// function App() {

//   const [showGroup1, setShowGroup1] = useState(false);
//   const [showGroup2, setShowGroup2] = useState(false);

//   return (
//     <>
//      <div>Hii for the Header component....!!!</div>

//      <button onClick={() => setShowGroup1(true)}>Load Group 1</button>
//      <button onClick={() => setShowGroup2(true)}>Load Group 2</button>

//      {showGroup1 && (
//      <Suspense fallback ={<div>For the Loading......!!</div>}>
//         <Gal1/> 
//      </Suspense>
//      )}
 

//      <div>Hii for the Footer component....!!!</div>

//      {showGroup2 && (
//      <Suspense fallback ={<div>For the Loading.......!!!</div>}>
//         <Gal2/>
//      </Suspense>
//    )}

//     </>
//   )
// }
// export default App


//task3

// import React, { Suspense, useState } from 'react'
// const Weather =React.lazy(()=> import('./Component7/Weather'));
// const Forecast =React.lazy(()=> import('./Component7/Forecast'));

// function App() {

//   const [showWeather, setShowWeather] = useState(false);
//   const [showForecast, setShowForecast] = useState(false);

//   return (
//     <>
//      <div>Hii for the Header component....!!!</div>

//      <button onClick={() => setShowWeather(true)}>Show Current Weather</button>
//       <button onClick={() => setShowForecast(true)}>Show Forecast</button>

//      {showWeather && (
//      <Suspense fallback ={<div>For the Loading......!!</div>}>
//        <Weather/>
//      </Suspense>
//      )}
 

//      <div>Hii for the Footer component....!!!</div>

//      {showForecast&& (
//      <Suspense fallback ={<div>For the Loading.......!!!</div>}>
//         <Forecast/>
//      </Suspense>
//    )}

//     </>
//   )
// }
// export default App



//task4

import React, { Suspense, useState } from 'react'
const Productdetail =React.lazy(()=> import('./Component8/Productdetail'));
const ProductReview =React.lazy(()=> import('./Component8/ProductReview'));
const ProductSuggestion =React.lazy(()=> import('./Component8/ProductSuggestion'));
function App() {

  const [loadReviews, setLoadReviews] = useState(false);
  const [loadSuggestions, setLoadSuggestions] = useState(false);

  return (
    <>
     <div>Hii for the Header component....!!!</div>

     <button onClick={() => setLoadReviews(true)}>Show Reviews</button>
     <button onClick={() => setLoadSuggestions(true)}>Show Suggestions</button>

   
       <Suspense fallback={<div>Loading Product Details...</div>}>
          <Productdetail/>
       </Suspense>
    

    <div>Hii for the productreview component....!!!</div>

          {loadReviews && (
              <Suspense fallback={<div>Loading Reviews...</div>}>
                <ProductReview/>
              </Suspense>
            )}
 

     <div>Hii for the productsuggestion component....!!!</div>

            {loadSuggestions && (
              <Suspense fallback={<div>Loading Suggestions...</div>}>
                <ProductSuggestion/>
              </Suspense>
         )}
      </>
   )
 }
export default App


