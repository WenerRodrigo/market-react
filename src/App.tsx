import './App.css'
import { useState } from "react"; // Importe useState aqui

import { TopHeader } from './components/TopHeader'
import Banner from './components/banner'
import Footer from './components/footer'
import { Main } from './components/main'
import { CellPhones } from './screens/cellPhones'
import { Header } from './screens/header'

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
      <Main />
      <Banner />
      <CellPhones searchQuery={searchQuery} />
      <Footer />
    </div>
  );
}

export default App;
