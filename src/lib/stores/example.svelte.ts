import { persistedState } from 'svelte-persisted-state';

export const exampleCount = persistedState('count', 1);

/**
 * Increments the current value of the exampleCount store by 1.
 * @returns {number} The new count value.
 */
export function incrementCount(): number {
	exampleCount.current += 1;
	return exampleCount.current;
}

/**
 * Resets the exampleCount store to its initial value of 1.
 * @returns {number} The reset count value.
 */
export function resetCount(): number {
	exampleCount.current = 1;
	return exampleCount.current;
}
