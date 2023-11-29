import React from "react";

type TodoInputProps = {
	onCreateTodos: (e: React.SyntheticEvent) => void
	setTodos: (e: React.ChangeEvent<HTMLInputElement>) => void
	todoName: string
}

export const TodoInput: React.FC<TodoInputProps> = ({ onCreateTodos, setTodos, todoName }) => {
	return (
		<React.Fragment>
			<div className={`flex items-center gap-3 w-full py-2.5 px-3 bg-slate-100 rounded-full`}>
				<button type={'button'} onClick={onCreateTodos} className={'px-2.5 py-2.5 text-white bg-blue-500 rounded-full'}>
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
						<path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
					</svg>
				</button>
				<input value={todoName} onChange={setTodos} type={'text'} placeholder={'Add todo here...'} className={'h-full bg-transparent w-full outline-none text-slate-500'} />
			</div>
		</React.Fragment>
	)
}