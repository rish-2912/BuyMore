import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import { Box } from '@mui/material'
import DataProvider, { DataContext } from "./context/DataProvider";
import { useContext } from "react";
function App() {

  return (
    <DataProvider className="App">
      <Header />
      <Box style={{ marginTop: '55px', background: 'rgb(242, 242, 242)' }}>
        <Home />
      </Box>

    </DataProvider>
  );
}

export default App;
