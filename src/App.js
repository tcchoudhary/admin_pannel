import './App.css';
import {Routes,Route} from 'react-router-dom'
import {CssBaseline,ThemeProvider} from '@mui/material'
import { ColorModeContext, useMode } from "./theme";
import Topbar from './components/page/global/Topbar';
import Sidebar from './components/page/global/Sidebar'
import { useState } from 'react';
import Dashboard from './components/page/dashboard/dashboard';
import Team from './components/page/team/index';
import Contacts from './components/page/contect/index'
import Invoices from './components/page/invoices/index'
import Register from './components/page/form/index'
import Events from './components/page/events/index'
import Quetions from './components/page/faq/index'
import Profile from './components/page/profile/index'
import Pie from './components/page/pie/index'
import Line from './components/page/line/index'
import Bar from './components/page/bar/index'
import Graphic from './components/page/geographic/index'
const App  = () =>{
  const [theme, colorMode] = useMode();
  // const [isSidebar, setIsSidebar] = useState(true);
  const desing = (
    <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="app">
        <Sidebar  />
        <main className="content">
          <Topbar/>
          <Routes>
            <Route path='/' element={<Dashboard/>}/>
            <Route path='/team' element={<Team/>}/>
            <Route path='/contacts' element={<Contacts/>}/>
            <Route path='/invoices' element={<Invoices/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/events' element={<Events/>}/>
            <Route path='/faq' element={<Quetions/>}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/line' element={<Line/>}/>
            <Route path='/pie' element={<Pie/>}/>
            <Route path='/bar' element={<Bar/>}/>
            <Route path='/geography' element={<Graphic/>}/>
          </Routes>
        </main>
      </div>
    </ThemeProvider>
  </ColorModeContext.Provider>
  );
  return desing;
}

export default App;
