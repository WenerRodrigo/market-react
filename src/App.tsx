import './App.css'
import { TopHeader } from './components/TopHeader'
import Banner from './components/banner'
import Footer from './components/footer'
import { Main } from './components/main'
import { Header } from './screens/header'

function App() {
  return (
   <div>
    <TopHeader />
    <Header />
    <Banner />
    <Main />
    <Footer />
   </div>
  )
}

export default App
