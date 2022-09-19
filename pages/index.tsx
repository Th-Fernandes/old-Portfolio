import type { NextPage } from 'next';
import { Header } from 'components/Header';
import { PresentationBanner } from 'components/PresentationBanner';
import { AboutMe } from 'components/AboutMe';
import { Repositories } from 'components/Repositories';

const Home: NextPage = () => {
  return (
    <>
      <Header />

      <main>
        <PresentationBanner />
        <AboutMe />
        <Repositories />
      </main>

    </>
  );
};

export default Home;
