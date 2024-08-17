import {
	createContext,
	Dispatch,
	ReactNode,
	SetStateAction,
	useState,
} from 'react';

interface ContextPropx {
	isOpen: boolean;
	setIsOpen: Dispatch<SetStateAction<boolean>>;
}
export const ContextModal = createContext<undefined | ContextPropx>(undefined);

export const ProviderModal = ({ children }: { children: ReactNode }) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<ContextModal.Provider value={{ isOpen, setIsOpen }}>
			{children}
		</ContextModal.Provider>
	);
};
