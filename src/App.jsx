import './App.css';
import AddDataComponent from './components/AddDataComponent';
import FetchDataComponent from './components/FetchDataComponent';

function App() {
  return (
    <>
      <div>
        <div>
          <h1>My App</h1>
          <AddDataComponent />
          <FetchDataComponent />
        </div>
      </div>
    </>
  );
}

export default App;
