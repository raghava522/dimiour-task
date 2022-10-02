import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom';
import PanelVoting from './PanelVoting';
import HPCConsole from './HPCConsole';

const router = createBrowserRouter([
  {
    path: "/",
    element: <div style={{ textAlign: 'center' }}>
      <Link to={"/panel-voting"}>Panel Voting</Link><br />
      <Link to={"/hpc-console"}>HPC Console</Link>
    </div>,
  },
  {
    path: "panel-voting",
    element: <PanelVoting />
  },
  {
    path: "hpc-console",
    element: <HPCConsole />
  }
]);
function App() {

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
