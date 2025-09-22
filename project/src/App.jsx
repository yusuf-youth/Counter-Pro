import Header from "./components/Header";
import CounterDisplay from "./components/CounterDisplay";
import Controls from "./components/Controls";
import CounterName from "./components/CounterName";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="content">
        <CounterName />
        <CounterDisplay value={2} />
        <Controls />
      </main>
    </div>
  );
}

export default App;
