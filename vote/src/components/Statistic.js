export const Statistic = (props) => {
  const {text, value} = props
  return (
    <p>{text}: <span>{value}</span></p>
  )
}
