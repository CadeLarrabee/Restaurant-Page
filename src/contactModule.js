export function GenerateContactPage() {
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
