import React, { useEffect, useState } from "react";
import { FaWrench } from 'react-icons/fa'
import { partCategories } from "../utils/data";
import { motion } from "framer-motion";
import { useStateValue } from "../context/StateProvider";
import RowContainer from "./RowContainer";

const ShopContainer = () => {
  const [filter, setFilter] = useState("drivetrain");

  const [{carItems}, dispatch] = useStateValue()

  useEffect(() => {}, [filter]);

  return (
    <section className="w-full my-6" id="shop">
      <div className="w-full flex flex-col items-center justify-center">
        <p className="text-2xl font-semibold capitalize relative text-headingColor before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-cartNumBg to-Nismo transition-all ease-in-out duration-100 mr-auto">
          Large Selection Straight From the Maker
        </p>
        <div className="w-full flex flex-wrap items-center justify-center gap-8 py-6 overflow-x-scroll scrollbar-none">
          {partCategories &&
            partCategories.map((category) => (
              <motion.div
                whileTap={{ scale: 0.7 }}
                key={category.id}
                className={`group ${
                  filter === category.UrlParamName ? "bg-Nismo" : "bg-card"
                } w-24 min-w-[94px] h-28 cursor-pointer rounded-lg drop-shadow-lg flex flex-col gap-3 items-center justify-center hover:bg-Nismo duration-100 transition-all ease-out`}
                onClick={() => setFilter(category.urlParamName)}
              >
                <div
                  className={`w-10 h-10 rounded-full shadow-lg ${
                    filter === category.UrlParamName
                      ? "bg-white"
                      : "bg-Nismo"
                  } group-hover:bg-white flex items-center justify-center`}
                >
                  <FaWrench
                    className={`${
                      filter === category.UrlParamName
                        ? "text-textColor"
                        : "text-white"
                    }
                      group-hover:text-textColor text-lg`}
                  />
                </div>
                <p
                  className={`text-sm ${
                    filter === category.UrlParamName
                      ? "text-white"
                      : "text-textColor"
                  }
                      group-hover:text-white`}
                >
                  {category.name}
                </p>
              </motion.div>
            ))}
            <div className="w-full">
                <RowContainer flag={false} data={carItems?.filter(item => item.category === filter)}/>
            </div>
        </div>
      </div>
    </section>
  );
};

export default ShopContainer;
