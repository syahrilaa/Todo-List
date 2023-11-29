import React from 'react'
import {TodosCard} from "./components/todoCard"
import {TodoInput} from "./components/input";
import {TopBar} from "./components/topbar";

interface TodosList {
    id: number
    todoName: string
    timeDate: string
    checked: boolean
}

const App = () => {
    const [todos, setListTodos] = React.useState<TodosList[]>([])
    const [todoName, setTodo] = React.useState('')
    const [messages, setMessages] = React.useState('')

    const setToLocalStorage = (data: TodosList[]) => {
        localStorage.setItem('todos', JSON.stringify(data))
    }

    const onChangeCheckbox = (id: number) => {
        const updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, checked: !todo.checked }
            }
            return todo
        })

        setListTodos(updatedTodos)
        setToLocalStorage(updatedTodos)
    }

    const onCreateTodos = (e: React.SyntheticEvent) => {
        e.preventDefault()

        if(todoName !== '') {
            const createTodo: TodosList = { id: todos.length + 1, todoName: todoName, timeDate: new Date().toISOString(), checked: false }
            const updateTodos = [...todos, createTodo]
            setListTodos(updateTodos)
            setToLocalStorage(updateTodos)
            setTodo('')
            setMessages('')
        } else {
            setMessages('Please enter the To-Do title.')
        }
    }

    React.useEffect(() => {
        const storedTodosList = localStorage.getItem('todos')
        if(storedTodosList) {
            setListTodos(JSON.parse(storedTodosList))
        }
    }, [])

    const selectedIndex = todos.filter(items => items.checked)
    const MAX_DISPLAY = 2

    let selectedName = selectedIndex.slice(0, MAX_DISPLAY).map((todo, index) => {
        return `${todo.todoName}`
    })

    const remainingCount = selectedIndex.length - MAX_DISPLAY

    const onALlDelete = () => {
        const updatedTodos = todos.filter(todo => !todo.checked)
        setListTodos(updatedTodos)
        setToLocalStorage(updatedTodos)
    }
    const onDelete = () => {
        const updatedTodos = todos.filter(todo => !todo.id)
        setListTodos(updatedTodos)
        setToLocalStorage(updatedTodos)
    }

    return (
        <div>
            <div className={`h-screen max-w-screen-md mx-auto`}>
                <header className="bg-white">
                    <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
                        <a href="/">
                            <span className={'text-2xl font-bold text-blue-500'}>Todo App</span>
                        </a>
                    </div>
                </header>
                <div className={'w-full px-4 mt-11'}>
                    <TodoInput onCreateTodos={onCreateTodos} setTodos={(e) => setTodo(e.target.value)} todoName={todoName} />
                    {messages ? (
                        <div className={'ml-6 mt-1.5'}>
                            <span className={'text-red-500 font-medium'}>{messages}</span>
                        </div>
                    ) : null}
                    {selectedIndex.length > 0 ? (
                        <TopBar selectedIndex={selectedIndex.length} selectedName={selectedName} remainingCount={remainingCount} onALlDelete={onALlDelete} />
                    ) : null}
                    <div className={'grid grid-cols-6 gap-3 w-full mt-11'}>
                        {todos.length > 0 ? todos.map((items, index) => {
                            return (
                                <TodosCard key={index+items.id} todoName={items.todoName} dateTime={items.timeDate} onDelete={onDelete} selected={items.checked} checkboxChange={() => onChangeCheckbox(items.id)} />
                            )
                        }) : (
                            <span className={'col-span-6 flex w-full justify-center text-slate-500'}>No Todos for now</span>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App