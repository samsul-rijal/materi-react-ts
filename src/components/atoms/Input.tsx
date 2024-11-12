
interface InputProps {
    type: string;
    placeholder?: string;
}

function Input({type, placeholder}: InputProps) {
  return (
    <input className="border-2" type={type} placeholder={placeholder} />
  )
}

export default Input
