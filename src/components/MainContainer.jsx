import HomeContainer from "./HomeContainer";
import { motion } from "framer-motion";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import RowContainer from "./RowContainer";
import { useStateValue } from "../context/StateProvider";
import { useEffect, useState } from "react";
import ShopContainer from "./ShopContainer";
import CartContainer from "./CartContainer";

const MainContainer = () => {
  const [{ carItems, cartShow }, dispatch] = useStateValue();
  let [scrollValue, setScrollValue] = useState(0);

  useEffect(() => {}, [scrollValue, cartShow]);

  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      <HomeContainer id="home" />
      <section className="w-full my-6">
        <div className="w-full flex items-center justify-between">
          <p className="text-2xl font-semibold capitalize relative text-headingColor before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-2 before:left-0 before:bg-Nismo transition-all ease-in-out duration-100">
            Highest quality brakes now available!
          </p>
          <div className="hidden md:flex gap-3 items-center">
            <motion.div
              whileTap={{ scale: 0.75 }}
              onClick={() => setScrollValue(scrollValue - 1)}
              className="w-8 h-8 rounded-lg bg-cartNumBg hover:bg-Nismo cursor-pointer hover:shadow-lg flex items-center justify-center"
            >
              <MdChevronLeft className="text-lg text-white" />
            </motion.div>
            <motion.div
              whileTap={{ scale: 0.75 }}
              onClick={() => setScrollValue(scrollValue + 1)}
              className="w-8 h-8 rounded-lg bg-cartNumBg hover:bg-Nismo cursor-pointer hover:shadow-lg flex items-center justify-center"
            >
              <MdChevronRight className="text-lg text-white" />
            </motion.div>
          </div>
        </div>
        <RowContainer
          scrollValue={scrollValue}
          flag={true}
          data={carItems?.filter((item) => item.category === "brakes")}
        />
      </section>

      <ShopContainer id="shop" />
      {cartShow && <CartContainer />}
    </div>
  );
};

export default MainContainer;
