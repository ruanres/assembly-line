import './App.css';
import AssemblyLine from './components/AssemblyLine';
function App() {
  const stages = [
    "Idea", 
    "Development", 
    "Testing", 
    "Deployment"
  ];

  return (
      <div className="App">
        <AssemblyLine stages={stages} />
      </div>
  );
}

export default App;
