export interface InterfaceSerieDetails {
	adult: boolean;
	backdrop_path: string;
	created_by: Createdby[];
	episode_run_time: number[];
	first_air_date: string;
	genres: Genre[];
	homepage: string;
	id: number;
	in_production: boolean;
	languages: string[];
	last_air_date: string;
	last_episode_to_air: Lastepisodetoair;
	name: string;
	next_episode_to_air: null;
	networks: Network[];
	number_of_episodes: number;
	number_of_seasons: number;
	origin_country: string[];
	original_language: string;
	original_name: string;
	overview: string;
	popularity: number;
	poster_path: string;
	production_companies: Productioncompany[];
	production_countries: Productioncountry[];
	seasons: Season[];
	spoken_languages: Spokenlanguage[];
	status: string;
	tagline: string;
	type: string;
	vote_average: number;
	vote_count: number;
}

interface Spokenlanguage {
	english_name: string;
	iso_639_1: string;
	name: string;
}

export interface Season {
	air_date: string;
	episode_count: number;
	id: number;
	name: string;
	overview: string;
	poster_path: string;
	season_number: number;
	vote_average: number;
}

interface Productioncountry {
	iso_3166_1: string;
	name: string;
}

interface Productioncompany {
	id: number;
	logo_path: null | string;
	name: string;
	origin_country: string;
}

interface Network {
	id: number;
	logo_path: string;
	name: string;
	origin_country: string;
}

interface Lastepisodetoair {
	id: number;
	name: string;
	overview: string;
	vote_average: number;
	vote_count: number;
	air_date: string;
	episode_number: number;
	episode_type: string;
	production_code: string;
	runtime: number;
	season_number: number;
	show_id: number;
	still_path: string;
}

interface Genre {
	id: number;
	name: string;
}

interface Createdby {
	id: number;
	credit_id: string;
	name: string;
	original_name: string;
	gender: number;
	profile_path: string;
}
