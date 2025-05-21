export interface Download {
	name: string;
	url: string;
}

export interface Design {
	id: string;
	name: string;
	summary: string;
	description: string;
	categories: string[];
	downloads: Download[];
	pictures: string[];
}
