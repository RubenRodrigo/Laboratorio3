import { makeStyles } from "@material-ui/styles"
import { Statistic } from "./Statistic"

const useStyles = makeStyles({
  statistics: {
    margin: '10px',
    display: 'grid',
    gridTemplateColumns: 'repeat(6, 1fr)'
  },
  title: {
    paddingBottom: '20px'
  }
})

export const Statistics = (props) => {
  const classes = useStyles()
  const {good, neutral, bad, all, average, positive} = props
  return (
    <div>
      <h1 className={classes.title}>Statistics</h1>
      {good || neutral || bad ?
        <div className={classes.statistics}>
          <Statistic text="Good" value={good} />
          <Statistic text="Neutral" value={neutral} />
          <Statistic text="Bad" value={bad} />
          <Statistic text="All" value={all} />
          <Statistic text="Average" value={average} />
          <Statistic text="Positive" value={positive} />
        </div>
      :
        <h3>No feedback given</h3>
      }
    </div>
  )
}
