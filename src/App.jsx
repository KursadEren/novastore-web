
import { Route, Routes } from 'react-router-dom';
import HomeScreen from './pages/HomeScreen';
import Products from './pages/Products';
import Student from './pages/Student';
import NotFound from './pages/NotFound';
import Sidebar from './components/Sidebar';
import Settings from './pages/Settings';


function App() {


  return (
    <div className='flex'>
      <Sidebar />
      <div className="flex-1 bg-slate-50 min-h-dvh lg:ml-72">
        <Routes>
          <Route path='/' element={<HomeScreen />} />
          <Route path='/Product' element={<Products />} />
          <Route path='/Student' element={<Student />} />
          <Route path='/Settings' element={<Settings />} />
          <Route path='/*' element={<NotFound />} />

        </Routes>
      </div>

    </div>
  )
}
export default App;
