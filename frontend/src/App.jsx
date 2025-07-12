import {useState, useEffect} from 'react'
import './App.css'
import axios from "axios";

function App() {
  const [jokes, setJokes] = useState([])
  
  useEffect(() => {
    axios.get("/api/jokes")
      .then(response => {
        setJokes(response.data)
      })
      .catch(error => {
        console.error("There was an error fetching the jokes!", error);
      });
  })

  return (
    <>
      <div>
          <h1>Jokes page</h1>
          <p>Jokes: {jokes.length}</p>
        <div className="jokes-container">
          {jokes.map((joke) => (
            <div key={joke.id} className="joke">
              <h2>{joke.title}</h2>
              <p>{joke.content}</p>
            </div>
          ))}
        </div>
      </div>

    </>
  )
}

export default App
