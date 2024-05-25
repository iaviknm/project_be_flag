import las from "../assets/images/las.jpg";
import tecidos from "../assets/images/tecidos.jpg";
import linhas from "../assets/images/linhas.jpg";
import tesouras from "../assets/images/tesouras.jpg";

const productCardData = {
  cards: [
    {
      id: 1,
      image: las,
      name: "Lãs",
      description: "Lãs - 170m - 100g",
      price: 6.4 + " €",
    },

    {
      id: 2,
      image: tecidos,
      name: "Tecidos",
      description: "Tecido ao metro",
      price: 19.90 + " €/m",
    },

    {
      id: 3,
      image: linhas,
      name: "Linhas Amigurumi",
      description: "Linhas Amigurumi \n254m \n125g",
      price: 6.4 + " €",
    },

    {
      id: 4,
      image: tesouras,
      name: "Tesouras",
      description: "Tesouras Stainless Steel",
      price: 12 + " €",
    },
  ],
};

export default productCardData;
