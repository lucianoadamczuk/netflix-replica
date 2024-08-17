import {
	createContext,
	Dispatch,
	ReactNode,
	SetStateAction,
	useState,
} from 'react';
import { InterfaceMovie, InterfaceSerie } from '../interfaces';

type TrendingMovies = [] | InterfaceMovie[];
type TrendingSeries = [] | InterfaceSerie[];
type DataMovies =
	| []
	| Array<{ ID: number; genre: string; movies: InterfaceMovie[] }>;
type DataSeries =
	| []
	| Array<{ ID: number; genre: string; series: InterfaceSerie[] }>;

type DataDiscover = [] | InterfaceMovie[] | InterfaceSerie[];

interface ContextProps {
	/* ----------------------------- trending movies ---------------------------- */
	trendingMovies: TrendingMovies;
	setTrendingMovies: Dispatch<SetStateAction<TrendingMovies>>;
	/* ----------------------------- trending series ---------------------------- */
	trendingSeries: TrendingSeries;
	setTrendingSeries: Dispatch<SetStateAction<TrendingSeries>>;
	/* --------------------------- all movies by genre -------------------------- */
	dataMovies: DataMovies;
	setDataMovies: Dispatch<SetStateAction<DataMovies>>;
	/* --------------------------- all series by genre -------------------------- */
	dataSeries: DataSeries;
	setDataSeries: Dispatch<SetStateAction<DataSeries>>;
	/* --------------------- movies or series with a specific genre --------------------- */
	dataDiscover: DataDiscover;
	setDataDiscover: Dispatch<SetStateAction<DataDiscover>>;
}
export const ContextByGenre = createContext<undefined | ContextProps>(
	undefined
);

export const ProviderByGenre = ({ children }: { children: ReactNode }) => {
	const [trendingMovies, setTrendingMovies] = useState<TrendingMovies>([]);
	const [trendingSeries, setTrendingSeries] = useState<TrendingSeries>([]);
	const [dataMovies, setDataMovies] = useState<DataMovies>([]);
	const [dataSeries, setDataSeries] = useState<DataSeries>([]);
	const [dataDiscover, setDataDiscover] = useState<DataDiscover>([]);

	return (
		<ContextByGenre.Provider
			value={{
				trendingMovies,
				setTrendingMovies,
				trendingSeries,
				setTrendingSeries,
				dataMovies,
				setDataMovies,
				dataSeries,
				setDataSeries,
				dataDiscover,
				setDataDiscover,
			}}
		>
			{children}
		</ContextByGenre.Provider>
	);
};
