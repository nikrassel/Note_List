import React, { useRef } from 'react'

interface TodoFormProps {
    onAdd(title: string): void
}

export const TodoForm: React.FC<TodoFormProps> = props => {
    const ref = useRef<HTMLInputElement>(null)
    // const [title, setTitle] = useState<string>('')
    // const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setTitle(event.target.value)
    // }
    const keyPressHandler = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            props.onAdd(ref.current!.value)
            ref.current!.value = ''
            // console.log(title)
            // setTitle('')
        }
    }
    return (
        <div className='input-field mt2'>
            <input 
                type="text"
                ref={ref}
                // onChange={changeHandler}
                onKeyDown={keyPressHandler}
                // value={title} 
                id='title' 
                placeholder='Input your chore'/>
            <label htmlFor="title" className='active'>
                Input your chore
            </label>
        </div>
    )
}
