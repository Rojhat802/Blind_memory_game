const { JSDOM } = require("jsdom");
const fs = require("fs");

describe("Navbar", () => {
  const navbarHtml = fs.readFileSync("Gameplay.html");
  let dom;
  beforeEach(() => {
    dom = new JSDOM(navbarHtml, { runScripts: "dangerously" });
  });

  it("should display the correct number of menu items", () => {
    const menuItems = dom.window.document.querySelectorAll(".menu-items li");
    expect(menuItems.length).toBe(5);
  });

  it("should toggle the menu when the hamburger icon is clicked", () => {
    const checkbox = dom.window.document.querySelector(".navbar-container input[type='checkbox']");
    const menuItems = dom.window.document.querySelector(".menu-items");
    expect(menuItems.classList.contains("show-menu")).toBe(false);
    checkbox.click();

    expect(menuItems.classList.contains("show-menu")).toBe(false);
    checkbox.click();
    expect(menuItems.classList.contains("show-menu")).toBe(false);
  });

  it("should highlight the active menu item", () => {
    const menuItems = dom.window.document.querySelectorAll(".menu-items li a");
    const homeLink = menuItems[menuItems.length - 1];

    expect(homeLink.classList.contains("active")).toBe(false);
    menuItems[1].click();
    expect(homeLink.classList.contains("active")).toBe(false);
    expect(menuItems[1].classList.contains("active")).toBe(false);
  });
});
