
interface LabelProps {
    title: string;
}

function Label({title}: LabelProps) {
  return (
    <label>{title}</label>
  )
}

export default Label
