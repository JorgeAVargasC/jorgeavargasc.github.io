export const getDelay = (index: number) => {
	const initialDelay = 0.25
	const delay = 0.25
	return initialDelay + index * delay
}
