import {
	createContext,
	Dispatch,
	ReactNode,
	SetStateAction,
	useState,
} from 'react';
import { InterfaceResponse, InterfaceSearch } from '../interfaces';

type Data = undefined | InterfaceResponse<InterfaceSearch[]>;

interface ContextProps {
	data: Data;
	setData: Dispatch<SetStateAction<Data>>;
}
export const ContextSearch = createContext<undefined | ContextProps>(undefined);

export const ProviderSearch = ({ children }: { children: ReactNode }) => {
	const [data, setData] = useState<Data>(undefined);

	return (
		<ContextSearch.Provider value={{ data, setData }}>
			{children}
		</ContextSearch.Provider>
	);
};
