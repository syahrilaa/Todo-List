import React from "react";
import {formaterDate} from "./formaterDate";

type TodosCardProps = {
	todoName: string
	dateTime: string
	selected?: boolean
	checkboxChange?: () => void
	onDelete?: () => void
}

export const TodosCard: React.FC<TodosCardProps> = ({ todoName, dateTime, selected, onDelete, checkboxChange }) => {
	const newDate = formaterDate(dateTime)
	return (
		<div className={'col-span-6 flex gap-3 bg-slate-100 w-full py-3 px-3 items-center rounded-3xl'}>
			<div className={'flex items-center gap-3 flex-1'}>
				<input checked={selected} onChange={checkboxChange} type={'checkbox'} className={'cursor-pointer appearance-none w-11 h-11 relative rounded-xl bg-slate-200 checked:bg-blue-500 before:absolute before:h-2 before:w-4 before:-rotate-45 before:top-[45%] before:left-2/4 before:-translate-x-2/4 before:-translate-y-2/4 before:border-l-2 before:border-b-2 before:border-white before:bg-transparent before:duration-200 before:ease-in-out duration-200 ease-in-out'} />
				<div className='flex items-center gap-3 w-full'>
                    <span className={'px-3 py-2 bg-blue-300/40 flex items-center gap-2 rounded-2xl text-xs font-medium text-blue-500'}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
	                    <span className={'w-max'}>{newDate}</span>
                    </span>
					<span className={`${selected ? 'line-through' : 'no-underline'} text-xl font-medium text-slate-500 line-clamp-1`}>{todoName}</span>
				</div>
			</div>
			<button disabled={selected} onClick={onDelete} type={'button'} className={'bg-red-300/40 disabled:bg-slate-300/40 disabled:text-slate-500 hover:bg-red-500 text-red-500 hover:text-white h-11 w-11 flex items-center justify-center rounded-xl duration-200 ease-in-out'}>
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
					<path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
				</svg>
			</button>
		</div>
	)
}