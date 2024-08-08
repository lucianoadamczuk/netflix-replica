import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { PageDetails, PageMovies } from "../pages";
import PageSeries from "../pages/PageSeries/PageSeries";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/movie" />} />
        <Route path="/movie" element={<PageMovies />} />
        <Route path="/TV" element={<PageSeries />} />
        <Route path="/movie/details/:ID" element={<PageDetails />} />
        <Route path="/TV/details/:ID" element={<PageDetails />} />
      </Routes>
    </BrowserRouter>
  );
}
