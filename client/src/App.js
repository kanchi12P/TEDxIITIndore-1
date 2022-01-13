import { Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import AboutPage from "./pages/AboutPage/AboutPage";
import HomePage from "./pages/HomePage/HomePage";
import SpeakersPage from "./pages/SpeakersPage/SpeakersPage";
import TalksPage from "./pages/TalksPage/TalksPage";
import TeamPage from "./pages/TeamPage/TeamPage";
import Footer from "./components/Footer/Footer";
import Gallery from "./pages/GalleryPage/GalleryPage";
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react";

function App() {

    useEffect(() => {
        Aos.init()
     }, [])

    return (
        <>
            <Navbar />
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/about' element={<AboutPage />} />
                <Route path='/speakers/:year' element={<SpeakersPage />} />
                <Route path='/talks' element={<TalksPage />} />
                <Route path='/team' element={<TeamPage />} />
                <Route path="/gallery" element={<Gallery/>}/>
                
            </Routes>
            <Footer />
        </>
    );
}

export default App;
