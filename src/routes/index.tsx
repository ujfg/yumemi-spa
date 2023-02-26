import { useRoutes, Link } from 'react-router-dom';

export const AppRoutes = () => {
  const routes = [
    {
      path: '/',
      element: (
        <div>
          Hello world!
          <Link to="hoge">hoge</Link>
        </div>
      ),
    },
    {
      path: '/hoge',
      element: <div>hoge!</div>
    }
  ];

  const element = useRoutes(routes);

  return <>{element}</>;
};