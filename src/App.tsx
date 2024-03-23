import { useState } from 'react';
import './App.css'
import { TopHeader } from './components/TopHeader';
import Footer from './components/footer'
import { AppRoutes } from './routes';
import { Header } from './screens/header';

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  //eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSearchChange = (query: any) => {
    setSearchQuery(query);
 };

  return (
    <div>
      <TopHeader />
      <Header onSearchChange={handleSearchChange} />
      <AppRoutes />
      <Footer />
    </div>
  );
}

export default App;
