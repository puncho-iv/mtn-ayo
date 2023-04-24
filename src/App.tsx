import { ConfigProvider, theme } from 'antd';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import './App.scss';

function App() {
  // const currentTheme = useStore((state) => state.currentTheme);

  return (
    <div className="App">
      <ConfigProvider
        // theme={{
        //   algorithm: currentTheme === 'dark' ? theme.darkAlgorithm : theme.defaultAlgorithm,
        // }}
      >
        <RouterProvider router={router} />
      </ConfigProvider>
    </div>
  );
  
}

export default App;
