export const Statistics = (props) => {
  const {good, neutral, bad, all, average, positive} = props
  return (
    <div>
      <h1>Statistics</h1>
      {good || neutral || bad ?
        <>
          <p>Good: <span>{good}</span></p>
          <p>Neutral: <span>{neutral}</span></p>
          <p>Bad: <span>{bad}</span></p>
          <p>All: <span>{all}</span></p>
          <p>Average: <span>{average}</span></p>
          <p>Positive: <span>{positive}</span>%</p>
        </>
      :
        <h3>No feedback given</h3>
      }
    </div>
  )
}
