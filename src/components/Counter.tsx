import { useState } from "react";

function Counter() {
    
    // useState 
    // let value = 0
    const [value, setValue] = useState<number>(0)

    const Increment = () => {
        setValue(value + 1)

    }
    const Decrement = () => {
        if(value > 1){
            setValue(value - 1)
        }
    }
  
    return (
    <div>
        <p>{value}</p>
        <div className="flex gap-5">
            <button onClick={Increment}>Increment</button>
            <button onClick={Decrement}>Decrement</button>
        </div>
    </div>
  )
}

export default Counter
