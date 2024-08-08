import { Header, MainDetails, Seasons, Trailers } from "./sections";

export default function PageDetails() {
  return (
    <>
      <Header />
      <main>
        <MainDetails />
        <Trailers />
        <Seasons />
      </main>
    </>
  );
}
