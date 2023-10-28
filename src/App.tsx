import './App.css'

import TabBar from './components/TabBar';
function App() {
  return(
    <>
      <div className="flex justify-center gap-1 mt-16">
        <h1 className="text-4xl text-blue-600 underline underline-offset-8">
          Vocab
        </h1>
        <h1 className="text-5xl text-green-600">
          Booster
        </h1>
      </div>
      <TabBar/>
    </>
  );
}

export default App
