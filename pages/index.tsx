import type { NextPage } from 'next';
import { Header } from 'components/Header';
import { PresentationBanner } from 'pages/Home/PresentationBanner';
import { AboutMe } from 'components/AboutMe';
import { Repositories } from 'components/Repositories';

const Home: NextPage = () => {
  return (
    <>
      <Header />

      <main>
        <PresentationBanner />
        <AboutMe hasHugeSpacing />
        <Repositories quantity={5} />
      </main>

    </>
  );
};

export default Home;
