import { useRoutes, Link } from 'react-router-dom';
import { Button, ButtonGroup, Stack } from '@chakra-ui/react'

export const AppRoutes = () => {
  const routes = [
    {
      path: '/',
      element: (
        <div>
          Hello world!
          <Link to="hoge">hoge</Link>
          <Stack spacing={4} direction='row' align='center'>
            <Button colorScheme='teal' size='xs'>
              Button
            </Button>
            <Button colorScheme='teal' size='sm'>
              Button
            </Button>
            <Button colorScheme='teal' size='md'>
              Button
            </Button>
            <Button colorScheme='teal' size='lg'>
              Button
            </Button>
          </Stack>
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