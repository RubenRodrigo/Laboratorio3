import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { Statistics } from './components/Statistics'
import './App.css'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
  principal: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    width: '100%',
    minHeight: '100vh',
    padding: '30px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },

  feedback: {
    background: 'white',
    width: '800px',
    height: '500px',
    borderRadius: '15px',
    padding: '20px'
  },

  title: {
    padding: '10px',
    textAlign: 'center',
    fontSize: '1.5rem'
  },
  buttons:{
    display: 'flex',
    justifyContent: 'space-around',
    padding: '40px 20px'
  },
  button: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
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
})

const App = () => {
  const classes = useStyles()
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  const handleClickGood = () => {
    setGood(good + 1)
    setAll(all + 1)
    setAverage(average + 1)
    console.log(good + 1);
    console.log(all + 1);
    setPositive(((good + 1) * 100) / (all + 1))
  }

  const handleClickNeutral = () => {
    setNeutral(neutral + 1)
    setAll(all + 1)
    setAverage(average + 0)
    setPositive(((good) * 100) / (all + 1))
  }

  const handleClickBad = () => {
    setBad(bad + 1)
    setAll(all + 1)
    setAverage(average - 1)
    setPositive(((good) * 100) / (all + 1))
  }

  return (
    <div className="App">
      <div className={classes.principal}>
        <div className={classes.feedback}>
          <div className={classes.title}>
            <h1>Give Feedback</h1>
          </div>
          <div className={classes.buttons}>
            <button className={classes.button} onClick={handleClickGood}>Good</button>
            <button className={classes.button} onClick={handleClickNeutral}>Neutral</button>
            <button className={classes.button} onClick={handleClickBad}>Bad</button>
          </div>
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            all={all}
            average={average}
            positive={positive}
          />
        </div>
      </div>
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)