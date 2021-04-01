import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { makeStyles } from '@material-ui/styles'
import './App.css'

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg,#2196f3 30%,#21cbf3 90%)",
    width: '100%',
    minHeight: '100vh',
    padding: '30px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  box: {
    background: 'white',
    width: '800px',
    height: '500px',
    borderRadius: '15px',
    padding: '20px'
  },
  anecdote:{
    margin: '20px 0',
    '& p':{
      padding: '10px 0',
    }
  },
  buttons:{
    display: 'flex',
    justifyContent: 'space-around',
  },
  button: {
    background: "linear-gradient(45deg,#2196f3 30%,#21cbf3 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
    cursor: 'pointer',
    '&:active':{
      opacity: 0.5,
    }
  },
  mostVoted: {
    marginTop: '30px',
    '& *':{
      padding: '10px 0',
    }
  }
})

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
}
const maxValue = (prev, current) => {
  return (prev.vote > current.vote) ? prev : current
}

const App = (props) => {
  const classes = useStyles()
  const [data, setData] = useState(props.anecdotes)
  const [selected, setSelected] = useState(getRandomInt(0, data.length))
  const [mostVoted, setMostVoted] = useState(data[selected])

  const handleClickGenerate = () => {
    const random = getRandomInt(0, data.length)
    setSelected(random)
  }

  const handleClickVote = () => {
    let newArr = [...data]
    newArr[selected].vote += 1
    setData(newArr)

    const maxVote = newArr.reduce(maxValue)
    setMostVoted(maxVote)
    console.log(maxVote);
  }


  return (
    <div className="App">
      <div className={classes.root}>
        <div className={classes.box}>
          <div>
            <h1>Anecdote of the day</h1>
            <div className={classes.anecdote}>
              <p>
                {data[selected].anecdote}
              </p>
              <p>
                <strong>Has {data[selected].vote}</strong>
              </p>
            </div>
            <div className={classes.buttons}>
              <button className={classes.button} onClick={handleClickVote}>Vote</button>
              <button className={classes.button} onClick={handleClickGenerate}>Generate anecdotes</button>
            </div>
          </div>
          <div className={classes.mostVoted}>
            <h1>Anecdote with most votes</h1>
            <p>
              {mostVoted.anecdote}
            </p>
            <p>
              <strong>Has {mostVoted.vote}</strong>
            </p>
          </div>
        </div>
      </div>
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

