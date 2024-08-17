const MOVIE_GENRES = [
	{ genre: 'Action', id: 28 },
	{ genre: 'Adventure', id: 12 },
	{ genre: 'Animation', id: 16 },
	{ genre: 'Comedy', id: 35 },
	{ genre: 'Crime', id: 80 },
	{ genre: 'Documentary', id: 99 },
	{ genre: 'Drama', id: 18 },
	{ genre: 'Family', id: 10751 },
	{ genre: 'Fantasy', id: 14 },
	{ genre: 'History', id: 36 },
	{ genre: 'Horror', id: 27 },
	{ genre: 'Music', id: 10402 },
	{ genre: 'Mystery', id: 9648 },
	{ genre: 'Romance', id: 10749 },
	{ genre: 'Science Fiction', id: 878 },
	{ genre: 'TV Movie', id: 10770 },
	{ genre: 'Thriller', id: 53 },
	{ genre: 'War', id: 10752 },
	{ genre: 'Western', id: 37 },
];

const SERIE_GENRES = [
	{ id: 10759, genre: 'Action & Adventure' },
	{ id: 16, genre: 'Animation' },
	{ id: 35, genre: 'Comedy' },
	{ id: 80, genre: 'Crime' },
	{ id: 99, genre: 'Documentary' },
	{ id: 18, genre: 'Drama' },
	{ id: 10751, genre: 'Family' },
	{ id: 10762, genre: 'Kids' },
	{ id: 9648, genre: 'Mystery' },
	{ id: 10763, genre: 'News' },
	{ id: 10764, genre: 'Reality' },
	{ id: 10765, genre: 'Sci-Fi & Fantasy' },
	{ id: 10766, genre: 'Soap' },
	{ id: 10767, genre: 'Talk' },
	{ id: 10768, genre: 'War & Politics' },
	{ id: 37, genre: 'Western' },
];

const IMAGE_URL = 'https://image.tmdb.org/t/p/';

export const API_TMDB = {
	base: 'https://api.themoviedb.org/3/',
	key: '?api_key=ce710ce9647f27d3c9514f1d3d3e1331',
	poster_SM: IMAGE_URL + 'w500',
	poster_XL: IMAGE_URL + 'original',
	backdrop_SM: IMAGE_URL + 'w1280',
	backdrop_XL: IMAGE_URL + 'original',
	moviesTrending: 'trending/movie/week',
	seriesTrending: 'trending/tv/week',
	movieGenres: MOVIE_GENRES,
	serieGenres: SERIE_GENRES,
};
