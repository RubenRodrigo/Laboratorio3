import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { Statistics } from './Statistics'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  const handleClickGood = () => {
    setGood(good+1)
    setAll(all+1)
    setAverage(average+1)
    console.log(good+1);
    console.log(all+1);
    setPositive(((good+1)*100)/(all+1))
  }

  const handleClickNeutral = () => {
    setNeutral(neutral+1)
    setAll(all+1)
    setAverage(average+0)
    setPositive(((good)*100)/(all+1))
  }

  const handleClickBad = () => {
    setBad(bad+1)
    setAll(all+1)
    setAverage(average-1)
    setPositive(((good)*100)/(all+1))
  }


  return (
    <div>
      <h1>Give Feedback</h1>
      <div>
        <button onClick={handleClickGood}>Good</button>
        <button onClick={handleClickNeutral}>Neutral</button>
        <button onClick={handleClickBad}>Bad</button>
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
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)