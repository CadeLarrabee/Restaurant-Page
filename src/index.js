//Photo by <a href="https://unsplash.com/@taylorrfranz?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Taylor Franz</a> on <a href="https://unsplash.com/photos/coffee-in-white-ceramic-container-GJogrGZxKJE?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
import "./style.css";

function OnEntry() {
  const headercontainer = document.createElement("div");
  headercontainer.className = "headerContainer";

  const homebutton = document.createElement("button");
  const menubutton = document.createElement("button");
  const contactbutton = document.createElement("button");

  homebutton.textContent = "Home";
  homebutton.className = "homeButton";

  menubutton.textContent = "Menu";
  menubutton.className = "menuButton";

  contactbutton.textContent = "Contact";
  contactbutton.className = "contactButton";

  menubutton.addEventListener("click", function () {
    GenerateMenuPage();
  });

  homebutton.addEventListener("click", function () {
    GenerateHomePage();
  });

  contactbutton.addEventListener("click", function () {
    GenerateContactPage();
  });

  headercontainer.appendChild(homebutton);
  headercontainer.appendChild(menubutton);
  headercontainer.appendChild(contactbutton);

  document.body.appendChild(headercontainer);

  GenerateHomePage();
}

function GenerateHomePage() {
  //
  //Remove everything except the header when making a new page
  //
  clearBodyExceptHeaderContainer();

  //
  //generate the wrapper for the entire page
  //
  const homepagewrapper = document.createElement("div");
  homepagewrapper.className = "homePageWrapper";

  //Generate the title wrapper

  const titlewrapper = document.createElement("div");
  titlewrapper.className = "titleWrapper";

  const titlebar = document.createElement("h1");
  titlebar.textContent = "Cade's Cafe";
  titlewrapper.appendChild(titlebar);
  titlebar.className = "titleBar";
  homepagewrapper.appendChild(titlewrapper);

  //Generate the about wrapper

  const aboutwrapper = document.createElement("div");
  aboutwrapper.className = "aboutWrapper";
  const helloP = document.createElement("p");
  helloP.textContent =
    "Welcome to Cade's Cafe! We serve tons of delicious drinks, made exactly how you specify! With our single source coffee, bubble tea, and matcha, there is sure to be something to suit your fancy!";
  aboutwrapper.appendChild(helloP);
  homepagewrapper.appendChild(aboutwrapper);

  //generate the hours/schedule wrapper

  const hourswrapper = document.createElement("div");
  hourswrapper.className = "hoursWrapper";

  const schedule = [
    { day: "Sunday", hours: "8am - 8pm" },
    { day: "Monday", hours: "6am - 6pm" },
    { day: "Tuesday", hours: "6am - 6pm" },
    { day: "Wednesday", hours: "6am - 6pm" },
    { day: "Thursday", hours: "6am - 10pm" },
    { day: "Friday", hours: "6am - 10pm" },
    { day: "Saturday", hours: "8am - 10pm" },
  ];

  const listElement = document.createElement("ul");

  schedule.forEach((day) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${day.day}: ${day.hours}`;
    listElement.appendChild(listItem);
  });

  const hourstitle = document.createElement("h1");
  hourstitle.className = "hoursTitle";
  hourstitle.textContent = "Schedule";
  hourswrapper.appendChild(hourstitle);
  hourswrapper.appendChild(listElement);

  homepagewrapper.appendChild(hourswrapper);

  //Location Wrapper

  const locationwrapper = document.createElement("div");
  locationwrapper.className = "hoursWrapper";

  const locationtitle = document.createElement("h1");
  locationtitle.textContent = "Location";
  locationwrapper.appendChild(locationtitle);

  const locationtext = document.createElement("p");
  locationtext.textContent = "119 via San Marcino, Firenze, Italy";
  locationwrapper.appendChild(locationtext);

  homepagewrapper.appendChild(locationwrapper);

  //

  document.body.appendChild(homepagewrapper);
}

function GenerateMenuPage() {
  console.log("Generating Menu");
  clearBodyExceptHeaderContainer();

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

function GenerateContactPage() {
  clearBodyExceptHeaderContainer();

  const form = document.createElement("form");
  form.setAttribute("id", "myForm");

  // Create form elements (e.g., input fields, labels, buttons)
  const nameLabel = document.createElement("label");
  nameLabel.textContent = "Name:";
  const nameInput = document.createElement("input");
  nameInput.setAttribute("type", "text");
  nameInput.setAttribute("name", "name");

  const emailLabel = document.createElement("label");
  emailLabel.textContent = "Email:";
  const emailInput = document.createElement("input");
  emailInput.setAttribute("type", "email");
  emailInput.setAttribute("name", "email");

  const contactLabel = document.createElement("label");
  contactLabel.textContent = "Contact:";
  const contactInput = document.createElement("input");
  contactInput.className = "contactForm";
  contactInput.setAttribute("type", "text");

  const submitButton = document.createElement("button");
  submitButton.setAttribute("type", "submit");
  submitButton.textContent = "Submit";

  // Append form elements to the form
  form.appendChild(nameLabel);
  form.appendChild(nameInput);
  form.appendChild(document.createElement("br")); // Line break for better spacing
  form.appendChild(emailLabel);
  form.appendChild(emailInput);
  form.appendChild(document.createElement("br"));
  form.appendChild(contactLabel);
  form.appendChild(contactInput);
  form.appendChild(document.createElement("br")); // Line break for better spacing
  form.appendChild(submitButton);

  // Append the form to the body or another container element
  document.body.appendChild(form);
}

function clearBodyExceptHeaderContainer() {
  const bodyChildren = document.body.children;

  // Iterate through the child nodes of document.body
  for (let i = bodyChildren.length - 1; i >= 0; i--) {
    const child = bodyChildren[i];

    // Check if the child is not headercontainer
    if (child.className !== "headerContainer") {
      // Remove the child node
      document.body.removeChild(child);
    }
  }
}

OnEntry();
