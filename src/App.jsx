import './App.css';
import { teamsLigue1 } from '../teams_ligue1';
import Header from './Header';
import Content from './Content';


const App = () => {
  return (
    <div className='window'>
      <Header />
      <Content teamsLigue1={teamsLigue1} />
    </div>
  )
}

export default App;
