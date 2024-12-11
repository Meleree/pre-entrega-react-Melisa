const products = [
    {
      id: "240897",
      name: "Remera Fire",
      description: "Remera manga corta. Cuello redondo. Fabricada en algodon. Over size. Unisex",
      price: 500,
      stock: 10,
      category: "Remera",
      image: "/img/reme-fire.webp",  
      size: ["S", "M", "L", "XL", "XXL"],
      colour: ["Black"]
    },
    {
      id: "240888",
      name: "Buzo Star",
      description: "Remera manga corta<br> Cuello redondo<br>Fabricada en algodon",
      price: 900,
      stock: 4,
      category: "Abrigos",
      image: "/img/buzo-star.webp",  
      size: ["S", "M", "L", "XL", "XXL"],
      colour: ["red", "green"]
    },
    {
      id: "240895",
      name: "Medias Puas",
      description: "Remera manga corta, cuello redondo",
      price: 100,
      stock: 2,
      category: "Accesorios",
      image: "/img/medias-puas.webp", 
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
  