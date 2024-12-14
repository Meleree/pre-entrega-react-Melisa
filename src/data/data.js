const products = [
  {
    id: "r11",
    name: "Remera Fire",
    description: "Remera manga corta. Cuello redondo. Fabricada en algodon. Over size. Unisex",
    price: 500,
    stock: 10,
    category: "remeras",
    image: "/img/reme-fire.webp",  
    size: ["S", "M", "L", "XL", "XXL"],
    colour: ["Black"]
  },
  {
    id: "b11",
    name: "Buzo Star",
    description: "Buzo manga larga. Cuello redondo. Fabricado en algodon",
    price: 900,
    stock: 4,
    category: "abrigos",
    image: "/img/buzo-star.webp",  
    size: ["S", "M", "L", "XL", "XXL"],
    colour: ["red", "green"]
  },
  {
    id: "a11",
    name: "Medias Puas",
    description: "Medias 3/4. Fabricadas en algodon",
    price: 100,
    stock: 2,
    category: "accesorios",
    image: "/img/medias-puas.webp", 
    size: ["Unico"],
    colour: ["Black"]
  },    
  {
    id: "r22",
    name: "Remera Basic",
    description: "Remera manga corta. Cuello redondo. Fabricada en algodon. Over size. Unisex",
    price: 500,
    stock: 10,
    category: "remeras",
    image: "/img/reme-basic.webp",  
    size: ["S", "M", "L", "XL", "XXL"],
    colour: ["Black"]
  },
  {
    id: "b22",
    name: "Buzo Some Love",
    description: "Buzo manga larga. Cuello redondo. Fabricado en algodon",
    price: 900,
    stock: 4,
    category: "abrigos",
    image: "/img/buzo-some-love.webp",  
    size: ["S", "M", "L", "XL", "XXL"],
    colour: ["red", "green"]
  },
  {
    id: "a22",
    name: "Medias Shine",
    description: "Medias 3/4. Fabricadas en algodon",
    price: 100,
    stock: 2,
    category: "accesorios",
    image: "/img/medias-shine.webp", 
    size: ["Unico"],
    colour: ["Black"]
  }
  ];
  
  const getProducts = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(products);
      }, 2000);  
    });
  };
  
  export { getProducts };
  