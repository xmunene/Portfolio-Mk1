import Hero from './sections/hero';
import ShowcaseSection from './sections/ShowcaseSection.jsx';
import NavBar from './components/NavBar.jsx';
//import LogoSection from './components/LogoSection.jsx'
import FeatureCards from './sections/FeatureCards.jsx'
import LearningTimeline from './sections/LearningTimeline.jsx'

const App = () => {
  return (
    <>
    <NavBar />
    <Hero />
    <ShowcaseSection />
    <FeatureCards />
    <LearningTimeline />
   </>
  )
}

export default App 