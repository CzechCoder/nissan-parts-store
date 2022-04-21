import BR2 from "../img/br2.png";
import EX1 from "../img/ex1.png";
import TU2 from "../img/tu2.png";
import EX4 from "../img/ex4.png";

export const partsData = [
  {
    id: 1,
    name: "Brake system",
    desc: "Disc and pads set",
    price: "50",
    imageSrc: BR2,
  },
  {
    id: 2,
    name: "Exhaust",
    desc: "Sports tip and muffler",
    price: "25",
    imageSrc: EX1,
  },
  {
    id: 3,
    name: "Turbo",
    desc: "High rev turbocharger",
    price: "60",
    imageSrc: TU2,
  },
  {
    id: 4,
    name: "Exhaust",
    desc: "Stock muffler",
    price: "22",
    imageSrc: EX4,
  },
];


export const partCategories = [
  {
    id: 1,
    name: "Exhausts",
    urlParamName: "exhausts",
  },
  {
    id: 2,
    name: "Turbos",
    urlParamName: "turbos",
  },
  {
    id: 3,
    name: "Brakes",
    urlParamName: "brakes",
  },
  {
    id: 4,
    name: "Rims",
    urlParamName: "rims",
  },
  {
    id: 5,
    name: "Drivetrain",
    urlParamName: "drivetrain",
  },
  {
    id: 6,
    name: "Clutch",
    urlParamName: "clutch",
  },
];
