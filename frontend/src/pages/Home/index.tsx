import { Link } from 'react-router-dom';

type Project = {
  url: string;
  title: string;
};

const projects: Project[] = [
  {
    url: '/todo',
    title: 'Todo List'
  }
];

const Header = () => {
  return (
    <div className='flex flex-col gap-4'>
      <p className="font-bold text-2xl">Project Directory</p>
      <p>This is a list of projects built. Click the title to navigate to them.</p>
    </div>
  )
};

const Links = () => {
  return (
    <ul>
      {
        projects.map((project, index) => {
          return (
            <li key={index} className='list-inside list-disc'>
              <Link to={project.url} className='w-full underline underline-offset-4'>
                {project.title}
              </Link>
            </li>
          );
        })
      }
    </ul>
  )
};

const Home = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className='flex flex-col gap-4'>
        <Header />
        <hr />
        <Links />
      </div>
    </div>
  )
}

export default Home;