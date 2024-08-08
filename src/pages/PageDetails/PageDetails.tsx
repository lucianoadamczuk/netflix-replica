import { Header, MainDetails, Related, Seasons, Trailers } from "./sections";

export default function PageDetails() {
  return (
    <>
      <Header />
      <main>
        <MainDetails />
        <Trailers />
        <Seasons />
        <Related />
      </main>
    </>
  );
}
