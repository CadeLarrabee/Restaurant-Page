export function GenerateMenuPage() {
  const menucontainer = document.createElement("div");
  menucontainer.className = "menuContainer";

  const buttonwrapper = document.createElement("div");
  buttonwrapper.className = "buttonWrapper";

  const beveragebutton = document.createElement("button");
  const breakfastbutton = document.createElement("button");

  beveragebutton.textContent = "Beverage";
  beveragebutton.className = "beverageButton";

  breakfastbutton.textContent = "Breakfast";
  breakfastbutton.className = "breakfastButton";

  beveragebutton.addEventListener("click", function () {
    generateBeverageMenu();
  });

  breakfastbutton.addEventListener("click", function () {
    generateBreakfastMenu();
  });

  const menuselectionwrapper = document.createElement("div");
  menuselectionwrapper.className = "menuSelectionWrapper";

  buttonwrapper.appendChild(beveragebutton);
  buttonwrapper.appendChild(breakfastbutton);
  menucontainer.appendChild(buttonwrapper);

  menucontainer.appendChild(menuselectionwrapper);
  generateBeverageMenu();

  function generateBeverageMenu() {
    menuselectionwrapper.innerHTML = "";

    const beverages = [
      {
        name: "Espresso",
        description:
          "Bones coffee especially roasted at our cafe! Can be made a doppio for 1$ extra",
        price: "2$",
      },
      {
        name: "Bubble tea",
        description:
          "Loose leaf jasmine tea cold extracted and put over ice. Be sure to tell us how much sugar you need!",
        price: "4$",
      },
      {
        name: "Matcha Hayley",
        description:
          "Loved by our local honey girl, a ceremonial grade matcha with foamed milk and a hint of vanilla.",
        price: "4.50$",
      },
    ];

    generateMenu(beverages);
  }

  function generateBreakfastMenu() {
    const breakfast = [
      {
        name: "Avo-Cade toast",
        description:
          "Avocado toast with german ruhrei and our secret blend of herbs and spices",
        price: "9.50$",
      },
      {
        name: "PanCades",
        description:
          "Stacked as high as you can handle. Each pancake is a mystery of flavor. Blueberries, bananas, dark chocolate, or even birthday cake!",
        price: "10$",
      },
      {
        name: "Matcha Crepes",
        description:
          "Food-grade matcha with blended creme. Ask about additional things, like strawberries, peanut butter, ect.",
        price: "4$",
      },
    ];

    generateMenu(breakfast);
  }

  function generateMenu(items) {
    menuselectionwrapper.innerHTML = "";

    items.forEach((item) => {
      const itemWrapper = document.createElement("div");
      itemWrapper.className = "menuItem";

      const itemName = document.createElement("h1");
      itemName.textContent = `${item.name}`;
      itemName.className = "menuItemName";

      const itemDesc = document.createElement("div");
      itemDesc.textContent = `${item.description}`;
      itemDesc.className = "menuItemDescription";

      const itemPrice = document.createElement("div");
      itemPrice.textContent = `${item.price}`;
      itemPrice.className = "menuItemPrice";

      itemWrapper.appendChild(itemName);
      itemWrapper.appendChild(itemDesc);
      itemWrapper.appendChild(itemPrice);
      menuselectionwrapper.appendChild(itemWrapper);
    });
  }

  document.body.appendChild(menucontainer);
}
