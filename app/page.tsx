import Header from './components/Header'
import Footer from './components/Footer'
import ChatBot from './components/ChatBot'
import Slideshow from './components/Slideshow'
import AboutChillGuy from './components/AboutChillGuy'
import SocialIcons from './components/SocialIcons'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#52afe6]">
      <Header />
      <main className="flex-grow flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-6 mb-12">
          <div className="flex items-center justify-center mb-4">
            <h2 className="font-luckiest-guy text-4xl text-[#52afe6] mr-4">Talk to Chill Guy AI</h2>
            <SocialIcons />
          </div>
          <p className="font-indie-flower text-2xl text-[#e55d2d] mb-6 text-center">"im just a chill guy"</p>
          <ChatBot />
        </div>
        <AboutChillGuy />
        <Slideshow />
      </main>
      <Footer />
    </div>
  )
}

