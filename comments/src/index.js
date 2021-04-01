import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [data, setData] = useState(props.anecdotes)
  const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  const handleClickGenerate = () => {
    const random = getRandomInt(0, props.anecdotes.length)
    setSelected(random)
  }

  const handleClickVote = () => {
    let newArr = [...data]
    newArr[selected].vote += 1
    setData(newArr)
  }

  return (
    <div>
      {data[selected].anecdote}
      {data[selected].vote}
      <button onClick={handleClickVote}>Vote</button>
      <button onClick={handleClickGenerate}>Generate anecdotes</button>
    </div>
  )
}

const anecdotes = [
  {
    anecdote: 'If it hurts, do it more often',
    vote: 0,
  },
  {
    anecdote: 'Adding manpower to a late software project makes it later!',
    vote: 0,
  },
  {
    anecdote: 'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    vote: 0,
  },
  {
    anecdote: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    vote: 0,
  },
  {
    anecdote: 'Premature optimization is the root of all evil.',
    vote: 0,
  },
  {
    anecdote: 'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    vote: 0,
  },
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)

