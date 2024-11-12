interface ButtonProps {
    text: string;
    onClick?: () => void; 
}

function Button({text, onClick}:ButtonProps) {
  return (
    <button className="rounded p-2 bg-orange-500" onClick={onClick}>{text}</button>
  )
}

export default Button
