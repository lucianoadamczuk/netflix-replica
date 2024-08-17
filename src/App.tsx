import { ProviderByGenre, ProviderModal, ProviderSearch } from './context';
import { ProviderDetails } from './context/ContextDetails';
import AppRoutes from './Routes/AppRoutes';

function App() {
	return (
		<>
			<ProviderByGenre>
				<ProviderDetails>
					<ProviderSearch>
						<ProviderModal>
							<AppRoutes />
						</ProviderModal>
					</ProviderSearch>
				</ProviderDetails>
			</ProviderByGenre>
		</>
	);
}

export default App;
