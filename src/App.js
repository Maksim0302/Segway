import { useState } from "react";
import Header, { ResponsiveMenu } from "./components/Header/Header";
import Owner from "./components/Owner/Owner";
import Categories from './components/Categories/Categories'
import Payment from "./components/Payment/Payment";
import Packing from "./components/Packing/Packing";
import Accessories from "./components/Accessories/Accessories";
import Features from "./components/Features/Features";
import Overview from "./components/Overview/Overview";
import Battery from "./components/Battery/Battery";
import Braking from "./components/Braking/Braking";
import Built from "./components/Built/Built";
import Folding from "./components/Folding/Folding";
import Regenerative from "./components/Regenerative/Regenerative";
import Charging from "./components/Charging/Charging";
import Riding from "./components/Riding/Riding";
import Manual from "./components/Manual/Manual";
import Protective from "./components/Protective/Protective";
import Reviews from "./components/Reviews/Reviews";
import Control from "./components/Control/Control";
import Kickscooter from "./components/Kickscooter/Kickscooter";
import Other from "./components/Other/Other";
import Footer from "./components/Footer/Footer";
import AdvantagesCard from "./components/Advantages/AdvantagesCard";
import Specifications from "./components/Specifications/Specifications";


function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="App">
      <ResponsiveMenu 
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />

      <Header 
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />
      <Owner />
      <Categories />
      <Payment />
      <AdvantagesCard />
      <Packing />
      <Accessories />
      <Features />
      <Overview />
      <Battery />
      <Braking />
      <Built />
      <Folding />
      <Regenerative />
      <Charging />
      <Riding />
      <Manual />
      <Specifications />
      <Protective />
      <Reviews />
      <Control />
      <Kickscooter />
      <Other />
      <Footer />
    </div>
  );
}

export default App;
