import { useState } from 'react'
import MainTemplate from '../components/templates/MainTemplate'
import { FaPencilAlt, FaTrash  } from "react-icons/fa";
import { Todo } from '../types';

function TodoApp() {

    const [todos, setTodos] = useState<Todo[]>([])
    const [text, setText] = useState("")   
    const [editingId, setEditingId] = useState<number | null>(null)
    
    
    const addTodo = (text: string) => {
        const newTodo: Todo = {
            id: Date.now(),
            task: text,
            complete: false,
        }

        setTodos((prev) => [...prev, newTodo])
    }

    const updateTodo = (id: number, newText: string) => {
        setTodos((prev) => 
            prev.map((todo) => 
                todo.id === id ? {...todo, task: newText} : todo
            )
        );

        // console.log('newText', newText);
        // console.log(todos);
        
        setEditingId(null)
    }

    const deleteTodo = (id: number) => {
        setTodos((prev) => prev.filter((todo) => todo.id !== id))
    }

    const handleComplete = (id: number) => {
        setTodos((prev) => 
            prev.map((todo) => 
                todo.id === id ? {...todo, complete: !todo.complete} : todo
            )
        );
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // console.log('add');

        if(!text.trim()) return

        console.log(text);
        console.log(editingId);
        console.log(todos);
        
        if(editingId){
            updateTodo(editingId, text)
        } else {
            addTodo(text)
        }
        setText('')
    }

    // console.log(todos)


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value)
    }

    const handleEdit = (id: number, textEdited: string) => {
        setEditingId(id)
        setText(textEdited)
    }

    return (
        <MainTemplate pageTitle='Todo App'>
        <div className='flex justify-center '>
            <div>
                <h1 className='text-2xl text-center'>Todo App</h1>
                <form className='w-96 p-10 shadow-md' onSubmit={handleSubmit}>
                    <input type="text" className='rounded mr-4' 
                        value={text}
                        onChange={handleChange} 
                    />
                    <button className='px-3 py-2 bg-blue-600 text-white rounded'>{editingId ? 'Edit' : 'Add'}</button>
                </form>
            </div>
        </div>

        <div className='w-96 p-10 mx-auto shadow mt-5 '>
            <h1 className='text-lg'>List Todo</h1>
            <ul>
                {todos.map((item) => (
                    <li key={item.id} className='flex p-5 justify-between items-center border mb-3 border-blue-600 rounded'>
                        <p onClick={() => handleComplete(item.id)} className={item.complete ? 'line-through cursor-pointer' : 'none cursor-pointer'}>{item.task}</p>
                        <div className='flex gap-3'>
                            <FaPencilAlt onClick={() => handleEdit(item.id, item.task)} className='cursor-pointer hover:text-yellow-400' />
                            <FaTrash onClick={() => deleteTodo(item.id)} className='cursor-pointer hover:text-red-600' />
                        </div>
                    </li>
                ))}
            </ul>
        </div>
        </MainTemplate>
    )
}

export default TodoApp
