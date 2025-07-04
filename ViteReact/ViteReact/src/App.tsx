import { useEffect } from 'react';
import Router from './pages/Router';


function App() {


  // useEffect(() => {
  //   fetch("http://localhost:8888/",
  //     {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //       }
  //     }
  //   )
  //     .then((res) => res.json())
  //     .then((res) => console.log(res))
  //     .catch((err) => console.log(err))
  // });

  return (
    <>
      <Router />
    </>
  )
}

export default App
