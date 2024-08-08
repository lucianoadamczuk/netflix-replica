import { Header, MainDetails, Trailers } from "./sections";

export default function PageDetails() {
  return (
    <>
      <Header />
      <main>
        <MainDetails />
        <Trailers />
      </main>
    </>
  );
}
