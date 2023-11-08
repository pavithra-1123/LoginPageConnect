import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { Homepage } from './Nav_page';
// import { LoginPage } from './Login_page';
// import { Register } from './RegisterForm';
import { Login } from './Login_page1';
import { ViewSlips } from './Slip';
import { NewPaySlip } from './NewSlip';
import { Profile } from './Profile_Update';
import { LoginPage } from './Login_page';

function App() {
  return (
    <>
     {
      (sessionStorage.getItem("user"))?
    <>
      <BrowserRouter>
      <Homepage/>
      <Routes>
        <Route path='view' exact element={<ViewSlips/>} />
        <Route path='newslip' exact element={<NewPaySlip/>}/>
        <Route path='update' exact element={<Profile/>}/>
      </Routes>
      </BrowserRouter>
    </>
    :
    <>
    <Login/>
    </>
  }
 
    </>
  );
}

export default App;