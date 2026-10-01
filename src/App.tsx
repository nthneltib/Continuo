import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Features from "./components/features/Features";
import InAction from "./components/InAction";
import Pricing from "./components/Pricing";
import EndCall from "./components/EndCall";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Intro />
        <Features />
        <InAction />
        <Pricing />
        <EndCall />
      </main>
      <Footer />
    </>
  );
}
