import { Route, Routes } from 'react-router-dom';
import Todo from './pages/Todo';
import NotFound from './pages/Error';
import Home from './pages/Home';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route index path='/todo' element={<Todo />} />

      {/* Error Routes */}
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default App
