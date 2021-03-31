import { Statistic } from "./Statistic"

export const Statistics = (props) => {
  const {good, neutral, bad, all, average, positive} = props
  return (
    <div>
      <h1>Statistics</h1>
      {good || neutral || bad ?
        <>
          <Statistic text="Good" value={good} />
          <Statistic text="Neutral" value={neutral} />
          <Statistic text="Bad" value={bad} />
          <Statistic text="All" value={all} />
          <Statistic text="Average" value={average} />
          <Statistic text="Positive" value={positive} />
        </>
      :
        <h3>No feedback given</h3>
      }
    </div>
  )
}
