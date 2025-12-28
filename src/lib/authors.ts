import type { Author } from './types';

export const AUTHORS = {
	borisnl: {
		name: 'Boris',
		link: {
			display: 'boris.foo',
			url: 'https://boris.foo'
		}
	}
} satisfies Record<string, Author>;
