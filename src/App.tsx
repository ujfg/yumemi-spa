import './App.css';
import { ResusAxios } from './lib/axios';
import { AppRoutes } from './routes';
import { ChakraProvider } from '@chakra-ui/react'
import { AppProvider } from './providers/app';

export function App() {
  const handleClick = () => {
    ResusAxios.get('api/v1/prefectures')
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log('err:', err);
      });
  };
  return (
    <ChakraProvider>
      <AppProvider>
        <AppRoutes />
      </AppProvider>
    </ChakraProvider>
  );
}

export default App;
