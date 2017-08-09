import { css } from 'styled-components';

// Iterate through the sizes and create a media template
export const media = {
	tablet: (...args) => css`
		@media (min-width: 768px) {
			${css(...args)}
		}
	`,

	desktop: (...args) => css`
		@media (min-width: 1200px) {
			${css(...args)}
		}
	`
}
