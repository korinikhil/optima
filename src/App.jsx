import React, { useEffect, useState } from 'react'
import Header from './Components/Nav/Header/Header'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './Components/pages/Home'
import About from './Components/pages/About'
import Contact from './Components/pages/Contact'
import Catalogue from './Components/pages/Catalogue'
import Footer from './Components/Nav/Footer/Footer'
import PrivacyPolicy from './Components/pages/PrivacyPolicy'
import TermsAndConditions from './Components/pages/TermsAndConditions'
import RefundPolicy from './Components/pages/RefundPolicy'
import Loader from './Components/pages/Loader'
import WhatsAppButton from './Components/pages/WhatsAppButton '
const App = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Simulate a delay for loading (e.g., fetching data or resources)
    const timer = setTimeout(() => setLoading(false), 3000); // 2 seconds
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="div flex flex-col min-h-screen">

          <Header />
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/catalogue' element={<Catalogue />} />
            <Route path='/privacy-policy' element={<PrivacyPolicy />} />
            <Route path='/terms' element={<TermsAndConditions />} />
            <Route path='/refund' element={<RefundPolicy />} />
          </Routes>
          <WhatsAppButton />
          <Footer />
        </div>
      )}

    </>
  )
}
export default App