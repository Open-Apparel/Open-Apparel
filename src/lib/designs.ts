import { AUTHORS } from './authors';
import type { Design } from './types';

const rawDesigns = {
	'touch-grass': {
		name: '>touch grass',
		description:
			"Ah, the classic 'touch grass' command - the internet's favorite prescription for terminal addicts! But let's be real, why would you want to touch actual grass when you can just create empty files named after it? This design perfectly captures the Linux user's dilemma: go outside and experience nature, or stay indoors creating symbolic links to nowhere. Warning: May cause sudden urges to chmod your lawn or grep through garden plants.",
		categories: ['Linux'],
		downloads: [
			{
				name: 'touch-grass.svg',
				url: '/touch-grass.svg'
			}
		],
		pictures: [],
		authors: [AUTHORS.borisnl]
	},
	'no-comment': {
		name: '/* no comment */',
		description:
			"Some people say code should be self-documenting. But let's be real, if it were, we wouldn't have to spend half our time figuring out what our past selves were thinking. No comment indeed!",
		categories: ['Programming'],
		downloads: [
			{
				name: 'no-comment.svg',
				url: '/no-comment.svg'
			}
		],
		pictures: [],
		authors: [AUTHORS.borisnl]
	},
	'css-is-awesome': {
		name: 'CSS is awesome',
		description:
			"They say CSS can contain anything - and they weren't kidding! This design demonstrates three fundamental CSS principles: 1) Everything is a box, 2) Overflow is inevitable (much like our love for CSS), and 3) No matter how hard you try, something will always break in unexpected ways. The 'awesome' is literally too awesome to be contained, much like how your layout will be too awesome to work in Internet Explorer. Bonus: If you squint, the overflow text represents the exact moment when you realize you need to support a new browser!",
		categories: ['CSS'],
		downloads: [
			{
				name: 'css-is-awesome.svg',
				url: '/css-is-awesome.svg'
			}
		],
		pictures: [],
		authors: [AUTHORS.borisnl]
	},
	'head-body': {
		name: 'Head and body',
		description:
			"Witness the perfect HTML anatomy lesson! This design captures that magical moment when your document transitions from the cerebral <head> to the physical <body>. It's where all your meta thoughts and style contemplations finally manifest into something visible.",
		categories: ['HTML'],
		downloads: [
			{
				name: 'head-body.svg',
				url: '/head-body.svg'
			}
		],
		pictures: [],
		authors: [AUTHORS.borisnl]
	},
	'rm-rf': {
		name: 'rm -rf /',
		description:
			"Behold the most powerful two-letter combination in the Linux universe! This design captures the essence of that magical moment when you realize you've just recursively forced your way through your entire filesystem. It's the digital equivalent of yelling 'I quit!' at your computer. Warning: This design may cause sudden panic attacks, involuntary typing of Ctrl+C, and the overwhelming urge to check your backups. Remember, with great power comes great responsibility to double-check your current directory!",
		categories: ['Linux'],
		downloads: [
			{
				name: 'rm-rf.svg',
				url: '/rm-rf.svg'
			}
		],
		pictures: [],
		authors: [AUTHORS.borisnl]
	},
	'i-unicode': {
		name: 'I � unicode',
		description:
			"This design perfectly captures the bittersweet relationship we all have with Unicode. One moment you're declaring your love for those beautiful characters that connect the world, and the next moment you're staring at a mysterious replacement character wondering what went wrong. It's the digital equivalent of a love letter that got lost in translation.",
		categories: ['Unicode'],
		downloads: [
			{
				name: 'i-unicode.svg',
				url: '/i-unicode.svg'
			}
		],
		pictures: [],
		authors: [AUTHORS.borisnl]
	},
	'im-not-a-robot': {
		name: "I'm not a robot",
		description:
			"This design perfectly captures the eternal struggle of modern humanity - proving we're not robots by failing to check a simple box. It represents that moment of hesitation where you wonder: 'If I check this box, does that make me more or less human?' The unchecked state symbolizes our collective resistance to automated verification systems, or perhaps we just forgot to click it. Warning: May cause sudden urges to question your own humanity, debate the nature of consciousness, or frantically refresh the page when the CAPTCHA inevitably fails.",
		categories: ['AI'],
		downloads: [
			{
				name: 'im-not-a-robot.svg',
				url: '/im-not-a-robot.svg'
			}
		],
		pictures: [],
		authors: [AUTHORS.borisnl]
	},
	databreach: {
		name: 'Decentralized backup',
		description:
			"This design illustrates the cutting-edge concept of 'distributed data management' - or as some might call it, 'accidental decentralization'. It perfectly captures that moment when your sensitive information decides to go on a world tour without your permission. Who needs cloud storage when you can have your data conveniently scattered across various unknown servers worldwide?",
		categories: ['Hacking'],
		downloads: [
			{
				name: 'databreach.svg',
				url: '/databreach.svg'
			}
		],
		pictures: [],
		authors: [AUTHORS.borisnl]
	},
	'dot-pattern': {
		name: 'Dot Pattern',
		description:
			'Got a thing for mysteries? Slap this Dot Pattern onto your tee! Who knows, it might start some interesting conversations or just intrigue passers-by.',
		categories: ['General'],
		downloads: [
			{
				name: 'dot-pattern.svg',
				url: '/dot-pattern.svg'
			}
		],
		pictures: [],
		authors: [AUTHORS.borisnl]
	},
	'mysterious-eye': {
		name: 'Mysterious Eye',
		description:
			'Capture the allure of the unknown with this Mysterious Eye design. Is it watching, is it warning, or is it simply observing?',
		categories: ['General'],
		downloads: [
			{
				name: 'mysterious-eye.svg',
				url: '/mysterious-eye.svg'
			}
		],
		pictures: [],
		authors: [AUTHORS.borisnl]
	}
} satisfies Record<string, Omit<Design, 'id'>>;

export const designs = Object.entries(rawDesigns).reduce(
	(acc, [id, design]) => {
		acc[id as keyof typeof rawDesigns] = {
			id,
			...design
		};
		return acc;
	},
	{} as Record<keyof typeof rawDesigns, Design>
);
