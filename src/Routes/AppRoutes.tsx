import { lazy, Suspense } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Modal, Spinner } from '../components';
import { Navbar } from '../layouts';

const PageMovies = lazy(() => import('../pages/PageMovies/PageMovies'));
const PageSeries = lazy(() => import('../pages/PageSeries/PageSeries'));
const PageDetails = lazy(() => import('../pages/PageDetails/PageDetails'));
const PageSearch = lazy(() => import('../pages/PageSearch/PageSearch'));

export default function AppRoutes() {
	return (
		<BrowserRouter>
			<Navbar />
			<Suspense fallback={<Spinner />}>
				<Routes>
					<Route path='/' element={<Navigate to='/movies' replace />} />
					<Route path='/movies' element={<PageMovies />} />
					<Route path='/series' element={<PageSeries />} />
					<Route path='/movies/details/:ID' element={<PageDetails />} />
					<Route path='/series/details/:ID' element={<PageDetails />} />
					<Route path='/search' element={<PageSearch />} />
					<Route path='*' element={<Navigate to='/movies' replace />} />
				</Routes>

				<Modal />
			</Suspense>
		</BrowserRouter>
	);
}
