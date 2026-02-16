import Router from './Router'
import TaskPage from './pages/TaskPage'
import TasksPage from './pages/TasksPage'
import AboutPage from './pages/AboutPage'

const App = () => {

  const routes = {
    '/': TasksPage,
    '/tasks/:id': TaskPage,
    '/about': AboutPage,
    '*': () => <div>404 Page not found</div>
  }
  
  return (
    <Router routes = { routes }/>
  )
}

export default App