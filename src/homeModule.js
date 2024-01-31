export function GenerateHomePage() {
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
