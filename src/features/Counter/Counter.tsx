import { useDispatch } from "react-redux"
import { useAppSelector } from "../../app/hooks"
import { countActions } from "./countSlice"
import { ManualEditor } from "../../components/ManualEditor"
import cl from './Counter.module.css'
import SettingsIcon from '@mui/icons-material/Settings';
import { appActions } from "../../app/appSlice"

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

    const changeMode = () => {
        dispatch(appActions.setMode('settings'))
    }

    return (
        <div className={cl.wrapper}>
            <ManualEditor value={count} changeValue={changeValue}/>
            <div className={cl.buttonsContainer}>
                <button className={cl.counterButton} onClick={increaseValue}>Increase</button>
                <button className={cl.counterButton} onClick={decreaseValue}>Decrease</button>
            </div>
            <button className={cl.settingsButton + " " + cl.counterButton} onClick={changeMode}><SettingsIcon/></button>
        </div>
    )
}