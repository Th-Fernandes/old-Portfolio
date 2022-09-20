import type { NextPage } from "next"
import { Header } from "components/Header";
import { Repositories } from "components/Repositories";

const ProjectsPage: NextPage = () => {
  return (
    <>
      <Header />

      <main>
        <Repositories />
      </main>
    </>
  )
}

export default ProjectsPage;