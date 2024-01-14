import { useState } from "react"

type ManualEditorPropsType = {
    value: number,
    changeValue: (newValue: number) => void
}

export const ManualEditor = ({ value, changeValue }: ManualEditorPropsType) => {

    const [editMode, setEditMode] = useState<boolean>(false)
    const [count, setCount] = useState<number>(value)

    const activateEditMode = () => {
        setEditMode(true);
        setCount(value);
    }

    const finishEditMode = () => {
        setEditMode(false)
        changeValue(count)
    }

    return editMode ? (
        <input value={count} onBlur={finishEditMode} onChange={(e) => setCount(Number(e.currentTarget.value))} autoFocus />
    ) : (
        <div onDoubleClick={activateEditMode}>{value}</div>
    )
}