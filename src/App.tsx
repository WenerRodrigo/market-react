import './App.css'
import { TopHeader } from './components/TopHeader'
import Banner from './components/banner'
import Footer from './components/footer'
import { Main } from './components/main'
import { CellPhones } from './screens/cellPhones'
import { Header } from './screens/header'

function App() {
  return (
   <div>
    <TopHeader />
    <Header />
    <Main />
    <Banner />
    <CellPhones />
    <Footer />
   </div>
  )
}

export default App
