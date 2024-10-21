export const getDelay = (index: number) => {
	const initialDelay = 0.25
	const delay = 0.5
	return initialDelay + index * delay
}
