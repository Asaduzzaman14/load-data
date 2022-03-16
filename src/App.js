import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <IncrimentDec></IncrimentDec>
      <LoadComment></LoadComment>

    </div>
  );
}

function LoadComment() {
  const [comments, setComments] = useState()
  useState(() => {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then(res => res.json())
      .then(data => setComments(data))
  }, [])

  return (
    <div>
      <h1>load Comment</h1>
      {
        comments.map(comment => <Comment email={comment.email} body={comment.body}></Comment>)
      }
    </div>
  )
}




function Comment(props) {
  return (
    <div>
      <h3>Email: {props.email}</h3>
      <p>Comment : {props.body}</p>
    </div>
  )
}




//  incrimant and decriment
function IncrimentDec() {

  const [count, setCount] = useState(0)

  const Incriment = () => setCount(count + 1)
  const Decriment = () => setCount(count + 1)



  return (
    <div>
      <h2>Incriment and Decrimant</h2>
      <h1>Counter:{count}</h1>
      <button onClick={Incriment}>Incriment</button>
      <button onClick={Decriment}>Dicriment</button>
    </div>
  )
}




export default App;
