import {
	createContext,
	Dispatch,
	ReactNode,
	SetStateAction,
	useState,
} from 'react';
import {
	InterfaceMovie,
	InterfaceSerie,
	InterfaceSerieDetails,
	InterfaceTrailer,
} from '../interfaces';
import { InterfaceMovieDetails } from '../interfaces/InterfaceMovieDetails';

type DataDetails =
	| undefined
	| null
	| InterfaceMovieDetails
	| InterfaceSerieDetails;
type Trailers = undefined | InterfaceTrailer[];
type Related = undefined | InterfaceMovie[] | InterfaceSerie[];

interface ContextProps {
	dataDetails: DataDetails;
	setDataDetails: Dispatch<SetStateAction<DataDetails>>;
	trailers: Trailers;
	setTrailers: Dispatch<SetStateAction<Trailers>>;
	related: Related;
	setRelated: Dispatch<SetStateAction<Related>>;
}
export const ContextDetails = createContext<undefined | ContextProps>(
	undefined
);

export const ProviderDetails = ({ children }: { children: ReactNode }) => {
	const [dataDetails, setDataDetails] = useState<DataDetails>(undefined);
	const [trailers, setTrailers] = useState<Trailers>(undefined);
	const [related, setRelated] = useState<Related>(undefined);
	return (
		<ContextDetails.Provider
			value={{
				dataDetails,
				setDataDetails,
				trailers,
				setTrailers,
				related,
				setRelated,
			}}
		>
			{children}
		</ContextDetails.Provider>
	);
};
