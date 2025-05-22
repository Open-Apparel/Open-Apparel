import type { Design } from './types';

export const designs: Design[] = [
	{
		id: 'touch-grass',
		name: '>touch grass',
		summary: 'Internet culture × Linux enjoyers',
		description: '',
		categories: ['Linux'],
		downloads: [
			{
				name: 'svg',
				url: '/touch-grass.svg'
			}
		],
		pictures: []
	},
	{
		id: 'no-comment',
		name: '/* no comment */',
		summary: 'No words needed',
		description: '',
		categories: ['Programming'],
		downloads: [
			{
				name: 'svg',
				url: '/no-comment.svg'
			}
		],
		pictures: []
	},
	{
		id: 'css-is-awesome',
		name: 'CSS is awesome',
		summary: 'Everyone loves CSS',
		description: '',
		categories: ['CSS'],
		downloads: [
			{
				name: 'svg',
				url: '/css-is-awesome.svg'
			}
		],
		pictures: []
	}
];
