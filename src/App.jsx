
import './App.css'
import Categories from './components/Categories'
import Collection from './components/Collection'
import ComfortStyleSection from './components/ComfortStyleSection'
import DiscountBanner from './components/DiscountBanner'
import EverydayLooks from './components/EverydayLooks'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import SecondaryNavbar from './components/SecondaryNavbar'
import WinterSaleBanner from './components/WinterSalesBanner'

function App() {

  return (
    <>
    <div className='container mx-auto'>
      <Navbar/>
      <div className='hidden lg:block mb-3'>

      <SecondaryNavbar/>
      </div>
      <Hero/>
      <div className='mt-13 mb-12'>
      <Collection/>
      </div>
      <EverydayLooks/>
      <Categories/>
      <DiscountBanner/>
      <div className='mt-8 mb-10'>
      <ComfortStyleSection/>
      </div>
      <WinterSaleBanner/>
      <Footer/>
      </div>
    </>
  )
}

export default App
