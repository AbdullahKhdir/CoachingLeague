import Slider from "./components/Slider";
import Section from "./components/Section";
import Main from "./components/Main";
import Navigation from "./includes/Navigation";
import ParticlesLayout from "./public/plugins/particles.js/ParticlesLayout";
import './public/styles/css/App.css';
import BluryScreen from "./components/BluryScreen";

function App() {
  return (
    <div className="app">
      <Main id={'main'}>
        <ParticlesLayout />

        {/* background-image: radial-gradient(rgb(135, 35, 65, .1), rgb(0, 0, 0)); */}
        {/* background-image: radial-gradient(rgb(190, 49, 68, .1), rgb(0, 0, 0)); */}
        {/* background-image: radial-gradient(rgb(240, 89, 65, .1), rgb(0, 0, 0)); */}
        {/* background-image: radial-gradient(rgb(255, 255, 255, .1), rgb(0, 0, 0)); */}
        <Section id={'layout'}>
          <BluryScreen class_name={'blur-layout'}/>
        </Section>

        <Section id={'navigation'}>
          <Navigation />
        </Section>
        
        {/* <Slider /> with black blur only */}
        <Section id={'testimonials'}>
          {/* todo glasy white blury slider div */}
          <Slider />
        </Section>

        {/* <Section id={'testimonials'}>
        </Section> */}
        
        {/* <Slider /> form for selecting services and others*/}
      </Main>
    </div>
  );
}


export default App;
