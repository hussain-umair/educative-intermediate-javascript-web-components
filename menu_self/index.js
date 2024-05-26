function showSubmenu() {
  const subMenu = document.getElementsByClassName("sub__menu")[0];
  subMenu.style.display = "block";
}

function hideSubmenu() {
  const subMenu = document.getElementsByClassName("sub__menu")[0];
  subMenu.style.display = "none";
}

function onMouseEnterMenuItem(item) {
  console.log("item=> ", item.target.innerText);
  showSubmenu();
}

const menuItems = document.getElementsByClassName("menu__main__item");

for (const menuItem of menuItems) {
  menuItem.onmouseenter = onMouseEnterMenuItem;
}

const menu = document.getElementsByClassName("menu")[0];
menu.onmouseleave = hideSubmenu;
