import { useRef, useState } from "react"

const UseStateVsUseRef = () => {

    // useState
    const [count, setCount] = useState(0);

    ///useRef

    const countRef = useRef(0);

    // Create a helper function to handle our Increment

    const handleIncrement = () => {
        setCount(prevCount => prevCount + 1)
        countRef.current++;
        console.log('from useState ' + count)
        console.log('from countRef ' + countRef.current)
    }
  return (
    <>
    
    <h1>UseState Vs UseRef</h1>
    <button onClick={handleIncrement} className="btn btn-primary">Increment</button>
    <div>
        <span>Coutner from useState: {count}</span>
    </div>
    <div>
        <span>from Ref: {countRef.current}</span>
    </div>
    
    
    </>
  )
}

export default UseStateVsUseRef