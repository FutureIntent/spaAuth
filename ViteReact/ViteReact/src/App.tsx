import { useEffect } from 'react';


function App() {


  useEffect(() => {
    fetch("http://localhost:8080/",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        }
      }
    )
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
  });

  return (
    <div>
      React!
    </div>
  )
}

export default App
