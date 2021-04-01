import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
  text: {
    textAlign: 'center',
    padding: '10px'
  },
  value: {
    textAlign: 'center',
    padding: '10px'
  }
})

export const Statistic = (props) => {
  const classes = useStyles()

  const {text, value} = props
  return (
    <div>
    <h3 className={classes.text}>{text}</h3>
    <p className={classes.value}>{value}</p>
    </div>
  )
}

