import React, { useState } from 'react'
import ReactDOM from 'react-dom'

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
      <div>
        <h1>Statistics</h1>
        <p>Good: <span>{good}</span></p>
        <p>Neutral: <span>{neutral}</span></p>
        <p>Bad: <span>{bad}</span></p>
        <p>All: <span>{all}</span></p>
        <p>Average: <span>{average}</span></p>
        <p>Positive: <span>{positive}</span>%</p>
      </div>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)