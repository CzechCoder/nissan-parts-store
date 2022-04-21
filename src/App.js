import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import CreateContainer from "./components/CreateContainer";
import Header from "./components/Header";
import MainContainer from "./components/MainContainer";
import { AnimatePresence } from "framer-motion";
import { useStateValue } from "./context/StateProvider";
import { getAllCarItems } from "./utils/firebase.functions";
import { actionType } from "./context/reducer";
import Footer from "./components/Footer";

const App = () => {
  const [{ carItems }, dispatch] = useStateValue();

  const fetchData = async () => {
    await getAllCarItems().then((data) => {
      dispatch({
        type: actionType.SET_CAR_ITEMS,
        carItems: data,
      });
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AnimatePresence exitBeforeEnter>
      <div className="w-full h-auto flex flex-col bg-gray-400">
        <Header />
        <main className="mt-14 md:mt-20 px-4 md:px-16 py-4 w-full">
          <Routes>
            <Route path="/*" element={<MainContainer />} />
            <Route path="/createItem" element={<CreateContainer />} />
          </Routes>
        </main>
        <Footer/>
      </div>
    </AnimatePresence>
  );
};
export default App;
