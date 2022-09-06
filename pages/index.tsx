import { Header } from 'components/Header';
import { PresentationBanner } from 'components/PresentationBanner';
import { NextPage } from 'next';

const Home:NextPage = () => {
  return (
    <>
      <Header />

      <main>
        <PresentationBanner/>
      </main>
    </>
  );
};

export default Home;