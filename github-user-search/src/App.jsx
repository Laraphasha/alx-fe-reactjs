import Search from './components/Search';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      <header className="text-center py-6">
        <h1 className="text-3xl font-bold">GitHub User Search</h1>
      </header>
      <main>
        <Search />
      </main>
    </div>
  );
}

export default App;
