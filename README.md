# Todo List App

This project was create with [syahakato](https://syahakato.site).


### Description
Projects yang saja buat ini menggunakan [React JS](https://reactjs.org) dan [Typescript](https://www.typescriptlang.org/) dengan CSS Framework andalan yaitu [Tailwind CSS](https://tailwindcss.com). Dibuat tanpa database, semua state di simpan di [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage), alasan memilih menyimpan di [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) adalah karena ini aplikasi ringan dan mudah untuk di buat jadi saya lakukan semua di client. 

## Penjelasan Code at [Line 1 - 4](https://github.com/syahrilaa/Todo-List/blob/e7037d63fd4bf35544b484626d9556bd946d0ddb/src/App.tsx#L1-L4)

### Import Components and React
```ts
import React from 'react'
import {TodosCard} from "./components/todoCard"
import {TodoInput} from "./components/input";
import {TopBar} from "./components/topbar";
```

Hanya ada 3 import components di sini yaitu [TodosCard](https://github.com/syahrilaa/Todo-List/blob/main/src/components/todoCard.tsx), [TodoInput](https://github.com/syahrilaa/Todo-List/blob/main/src/components/input.tsx) dan [TopBar](https://github.com/syahrilaa/Todo-List/blob/main/src/components/topbar.tsx)
yang dipakai di satu Page Components itu [App](https://github.com/syahrilaa/Todo-List/blob/main/src/App.tsx)

### Interface Todos at [Line 6 - 11](https://github.com/syahrilaa/Todo-List/blob/e7037d63fd4bf35544b484626d9556bd946d0ddb/src/App.tsx#L6-L11)

```ts
interface TodosList {
    id: number
    todoName: string
    timeDate: string
    checked: boolean
}
```

Todos memiliki 4 data yaitu:

- **id**: Object Types [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)
- **todoName**: Object Types [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
- **timeDate**: Object Types [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
- **checked**: Object Types [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)

Ini penting di gunakan karena saya menggunakan Typescript, mungkin jika kalian menggunakan typescript tapi tidak membuat [Interface](https://www.typescriptlang.org/docs/handbook/typescript-tooling-in-5-minutes.html#interfaces) seperti contoh bisa jadi mendapatkan error seperti ini 

![Error#Interface.png](git-source%2FError%23Interface.png)

### State 

```jsx
const [todos, setListTodos] = React.useState<TodosList[]>([])
const [todoName, setTodo] = React.useState('')
```
[todos](https://github.com/syahrilaa/Todo-List/blob/7c6b56950f74d5f338d2a577f25d12b8a0c4acbd/src/App.tsx#L14) adalah data array dari [TodoList](https://www.typescriptlang.org/docs/handbook/typescript-tooling-in-5-minutes.html#interfaces) <br>
[todoName](https://github.com/syahrilaa/Todo-List/blob/7c6b56950f74d5f338d2a577f25d12b8a0c4acbd/src/App.tsx#L15) ini berhubungan dengan input

### LocalStorage Store Todos Data

```tsx
const setToLocalStorage = (data: TodosList[]) => {
	localStorage.setItem('todos', JSON.stringify(data))
}
```
kita set data array todos ke localStorage dan memasukan kata kuncinya/key dan kirimkan data todos dan di ubah dari Javascript Object ke Data JSON dengan mengguanakan [JSON.stringify(data)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)

### Create Event Checkbox 

```tsx
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
```

### Handle Create New Todos
```tsx
const onCreateTodos = (e: React.SyntheticEvent) => {
	e.preventDefault()

	const createTodo: TodosList = { id: todos.length + 1, todoName: todoName, timeDate: new Date().toISOString(), checked: false }
	const updateTodos = [...todos, createTodo]
	setListTodos(updateTodos)
	setToLocalStorage(updateTodos)
	setTodo('')
}
```

### Get data from LocalStorage
```tsx
React.useEffect(() => {
	const storedTodosList = localStorage.getItem('todos')
	if(storedTodosList) {
		setListTodos(JSON.parse(storedTodosList))
	}
}, [])
```

### Other Code 
```tsx
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
```