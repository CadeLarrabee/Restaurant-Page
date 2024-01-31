//Photo by <a href="https://unsplash.com/@taylorrfranz?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Taylor Franz</a> on <a href="https://unsplash.com/photos/coffee-in-white-ceramic-container-GJogrGZxKJE?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
import "./style.css";
import { GenerateHomePage } from "./homeModule.js";
import { GenerateMenuPage } from "./menuModule.js";
import { GenerateContactPage } from "./contactModule.js";

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
    clearBodyExceptHeaderContainer();
    GenerateMenuPage();
  });

  homebutton.addEventListener("click", function () {
    clearBodyExceptHeaderContainer();
    GenerateHomePage();
  });

  contactbutton.addEventListener("click", function () {
    clearBodyExceptHeaderContainer();
    GenerateContactPage();
  });

  headercontainer.appendChild(homebutton);
  headercontainer.appendChild(menubutton);
  headercontainer.appendChild(contactbutton);

  document.body.appendChild(headercontainer);

  GenerateHomePage();
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
