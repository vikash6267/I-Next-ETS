import './App.css';
import Navbar from './components/common/Navbar';
import { Routes,Route } from 'react-router-dom';
function App() {
  return (
    <div className="flex min-h-screen w-screen flex-col ">
<Navbar />
    <div className='mt-[70px]'>
   
   <Routes>

<Route path='/webdev' element={<div> hello</div>}>

</Route>

   </Routes>
    </div>
    </div>
  );
}

export default App;
