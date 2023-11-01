import './App.css';
import Table from './component/Table/Table';
import Wrapper from './component/Wrapper/Wrapper';
import {CarsProvider} from "../src/component/Cars/CarsContext"
interface CarModel {
  id: number;
  name: string;
}

const futureCars: CarModel[] = [
  {
    id: 1,
    name: 'Volkswagen'
  },
  {
    id: 2,
    name: 'BMW'
  },
  {
    id: 3,
    name: 'Toyota' 
  },
  {
    id: 4,
    name: 'Nissan'
  },
  {
    id: 5,
    name: 'General Motors'
  },
  {
    id: 6,
    name: 'Hyundai'
  },
  {
    id: 7,
    name: 'Peugeot'
  },
  {
    id: 8,
    name: 'Kia'
  },
  {
    id: 9,
    name: 'Volvo'
  },
  {
    id: 10,
    name: 'Mazda'
  }
]

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <CarsProvider>
          <Wrapper cars={futureCars}/>
          <Table  cars={futureCars}/>  
        </CarsProvider>
      </header>
    </div>
  );
}

export default App;


