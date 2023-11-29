import React from "react";

type TopBarProps = {
	selectedIndex: number
	selectedName: string[]
	remainingCount: number
	onALlDelete: () => void
}

export const TopBar: React.FC<TopBarProps> = ({ onALlDelete, remainingCount, selectedIndex, selectedName }) => {
	return (
		<div className={`flex items-center justify-between gap-3 w-full py-2.5 px-3 bg-slate-100 rounded-2xl mt-11`}>
			<div className={'flex items-center gap-3'}>
                <span className={'px-3 py-2 bg-blue-300/40 text-blue-500 rounded-2xl w-max'}>
                    {selectedIndex} Selected
                </span>
				<span className={'text-slate-500 text-sm'}>
				    <span className={'font-bold max-w-md line-clamp-1'}>{selectedName.join(', ')}</span> { remainingCount > 0 ? ( <span>and <span className={'font-bold'}>{remainingCount} more</span></span> ) : null }
				</span>
			</div>
			<button onClick={onALlDelete} type={'button'} className={'bg-red-300/40 hover:bg-red-500 text-red-500 hover:text-white h-11 w-11 flex items-center justify-center rounded-xl duration-200 ease-in-out'}>
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
					<path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
				</svg>
			</button>
		</div>
	)
}