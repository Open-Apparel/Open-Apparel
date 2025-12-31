export interface Download {
	name: string;
	url: string;
}

export interface Author {
	name: string;
	link?: {
		display: string;
		url: string;
	};
}

export interface Design {
	id: string;
	name: string;
	description: string;
	categories: string[];
	downloads: Download[];
	pictures: string[];
	authors?: Author[];
}
