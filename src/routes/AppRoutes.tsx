import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { PageDetails, PageMedia } from "../pages";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/movie" />} />
        <Route path="/movie" element={<PageMedia />} />
        <Route path="/TV" element={<PageMedia />} />
        <Route path="/movie/details/:ID" element={<PageDetails />} />
        <Route path="/TV/details/:ID" element={<PageDetails />} />
      </Routes>
    </BrowserRouter>
  );
}
