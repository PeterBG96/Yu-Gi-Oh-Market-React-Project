import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { AuthProvider } from "./contexts/AuthContext";
import { CardProvider } from "./contexts/CardContext"
import PrivateGuard from "./components/common/PrivateGuard";
import * as yugiService from "./services/yugiService"
import { useLocalStorage } from "./hooks/useLocalStorage";

import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Create from "./components/Create";
import Contact from "./components/Contact";
import Facts from "./components/Facts";
import MakoTsunami from "./components/MakoTsunami";
import WeevilUnderwood from "./components/WeevilUnderwood";
import PaniK from "./components/PaniK";
import Pegasus from "./components/Pegasus";
import YugiMuto from "./components/YugiMuto";
import PageNotFound from "./components/PageNotFound";
import Forum from "./components/Forum"
import Market from "./components/Market"
import Profile from "./components/Profile"
import Details from "./components/Details"
import Edit from "./components/Edit"
import Buy from "./components/Buy"
import FinalScreen from "./components/FinalScreen";
import ThankYou from "./components/Contact/ThankYouPage/ThankYou"
import Footer from "./components/Footer"
import Logout from "./components/Logout"

function App() {


  return (
    <AuthProvider>
      <div id="container">
        <Header />

      <CardProvider>
        <main id="site-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login  />} />
            <Route path="/register" element={<Register />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/contact/thankyou" element={<ThankYou />} />
            <Route path="/facts" element={<Facts />} />
            <Route path="/facts/makotsunami" element={<MakoTsunami />} />
            <Route path="/facts/weevilunderwood" element={<WeevilUnderwood />} />
            <Route path="/facts/panik" element={<PaniK />} />
            <Route path="/facts/pegasus" element={<Pegasus />} />
            <Route path="/facts/yugimuto" element={<YugiMuto />} />
            <Route path="/market" element={<Market />} />
            <Route path="/details/:cardId" element={<Details />} />
            <Route element={<PrivateGuard />}>
              <Route path="/create" element={<Create />} />
              <Route path="/forum" element={<Forum />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/logout" element={<Logout />} />
              <Route path="/market/:cardId/edit" element={<Edit />} />
              <Route path ="/market/:cardId/buy" element ={<Buy />} />
              <Route path ="/market/buy/final" element ={<FinalScreen />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </main>
      </CardProvider>
        <Footer />
        
      </div>
    </AuthProvider>
  );
}

export default App;
