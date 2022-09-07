import type { NextPage } from 'next';
import { Header } from 'components/Header';
import { PresentationBanner } from 'components/PresentationBanner';
import { AboutMe } from 'components/AboutMe';

const Home: NextPage = () => {
  return (
    <>
      <Header />

      <main>
        <PresentationBanner />
        <AboutMe />
      </main>
    </>
  );
};

export default Home;
