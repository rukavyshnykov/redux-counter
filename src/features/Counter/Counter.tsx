import { useDispatch, useSelector } from "react-redux"
import { useAppSelector } from "../../app/hooks"
import { countActions } from "./countSlice"
import { ManualEditor } from "../../components/ManualEditor"

export const Counter = () => {

    const dispatch = useDispatch()
    const count = useAppSelector(state => state.count.count)

    const increaseValue = () => {
        dispatch(countActions.increaseValue())
    }

    const decreaseValue = () => {
        dispatch(countActions.decreaseValue())
    }

    const changeValue = (value: number) => {
        dispatch(countActions.changeValue(value))
    }

    return (
        <>
            <ManualEditor value={count} changeValue={changeValue}/>
            <button onClick={increaseValue}>Increase</button>
            <button onClick={decreaseValue}>Decrease</button>
        </>
    )
}