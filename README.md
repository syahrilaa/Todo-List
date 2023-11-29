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