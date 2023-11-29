export const formaterDate = (date: string) => new Date(date).toLocaleDateString('id-ID', {
	day: 'numeric',
	month: 'short',
	year: 'numeric'
})