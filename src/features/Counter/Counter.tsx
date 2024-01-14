import { useDispatch, useSelector } from "react-redux"
import { useAppSelector } from "../../app/hooks"
import { countActions } from "./countSlice"

export const Counter = () => {

    const dispatch = useDispatch()
    const count = useAppSelector(state => state.count.count)

    const increaseValue = () => {
        dispatch(countActions.increaseValue())
    }

    const decreaseValue = () => {
        dispatch(countActions.decreaseValue())
    }

    return (
        <>
            <div>{count}</div>
            <button onClick={increaseValue}>Increase</button>
            <button onClick={decreaseValue}>Decrease</button>
        </>
        
    )
}