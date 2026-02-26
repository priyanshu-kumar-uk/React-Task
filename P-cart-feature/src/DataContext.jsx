import { createContext } from "react";

export let mycontext = createContext()

 export let DataContext = function({children}){
  const products = [
  {
    id: 1,
    title: "Apple AirPods Max",
    description: "Premium noise-cancelling wireless headphones",
    price: 299.99,
    image: "https://picsum.photos/id/1011/500/500"
  },
  {
    id: 2,
    title: "Sony WH-1000XM5",
    description: "Industry-leading noise cancellation",
    price: 349.99,
    image: "https://picsum.photos/id/1015/500/500"
  },
  {
    id: 3,
    title: "Bose QuietComfort 4",
    description: "High-fidelity audio experience",
    price: 279.99,
    image: "https://picsum.photos/id/1025/500/500"
  },
  {
    id: 4,
    title: "JBL Live 660NC",
    description: "Adaptive noise cancelling headphones",
    price: 199.99,
    image: "https://picsum.photos/id/1035/500/500"
  },
  {
    id: 5,
    title: "Beats Studio3",
    description: "Wireless over-ear headphones",
    price: 249.99,
    image: "https://picsum.photos/id/1041/500/500"
  },
  {
    id: 6,
    title: "Sennhe Momentum ",
    description: "Audiophile-inspired sound",
    price: 379.99,
    image: "https://picsum.photos/id/1050/500/500"
  },
  {
    id: 7,
    title: "Anker Soundcore ",
    description: "Budget-friendly ANC headphones",
    price: 149.99,
    image: "https://picsum.photos/id/1060/500/500"
  },
  {
    id: 8,
    title: "Skullcandy Crusher ",
    description: "Adjustable sensory bass headphones",
    price: 169.99,
    image: "https://picsum.photos/id/1070/500/500"
  },
  {
    id: 9,
    title: "Boat Rockerz 550",
    description: "Affordable wireless headphones",
    price: 79.99,
    image: "https://picsum.photos/id/1080/500/500"
  },
  {
    id: 10,
    title: "Marshall Major IV",
    description: "Iconic design with long battery life",
    price: 159.99,
    image: "https://picsum.photos/id/109/500/500"
  },
  {
    id: 11,
    title: "AKG N700NC M2",
    description: "Studio-quality sound headphones",
    price: 229.99,
    image: "https://picsum.photos/id/110/500/500"
  },
  {
    id: 12,
    title: "Bang & Olufsen HX",
    description: "Luxury premium wireless headphones",
    price: 499.99,
    image: "https://picsum.photos/id/111/500/500"
  }
];


  return <mycontext.Provider value={{products}}>{children}</mycontext.Provider>
}