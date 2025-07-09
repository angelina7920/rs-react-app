import Main from './components/search-result/Main';
import ErrorButton from './components/shared/ErrorButton';
import ErrorBoundary from './ErrorBoundary';

function App() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen flex flex-col items-center bg-gray-50 p-4">
        <Main />
        <ErrorButton />
      </div>
    </ErrorBoundary>
  );
}

export default App;
