import Login from './Components/Loginpage/Login';
import Signup from './Components/SignupPage/Signup';
import Questionarie from './Components/QuestionsPage/Questionarie';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './Components/Dashboard/Dashboard';
import Music from './Components/Music/Music';
import Meditation from './Components/Meditation/Meditation';

function App() {
  return (
      <div className="flex w-full h-screen ">
          <BrowserRouter>
             <Routes>
                   <Route path ="/" element ={<Login/>}> </Route>
                   <Route path ="/Signup" element ={<Signup/>}> </Route>
                   <Route path ="/Questionarie" element ={<Questionarie/>}> </Route>
                   <Route path ="/Dashboard" element ={<Dashboard/>}> </Route>
                   <Route path ="/Music" element ={<Music/>}> </Route>
                   <Route path ="/Meditation" element ={<Meditation/>}> </Route>
             </Routes>
          </BrowserRouter>
      </div>

  );
}

export default App;



/*             <div className="flex items-center w-full lg:w-1/2">
              <Login />
            </div>
            <div className="items-center justify-center hidden lg:flex lg:w-1/2">
              <div className="flex items-center lg:w-3/5">
                <Side />
              </div>
            </div>
           */ 