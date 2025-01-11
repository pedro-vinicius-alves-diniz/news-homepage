function Navbar() {
  const mask = document.getElementById("mask");
  const menuNavbar = document.querySelector(".btn-menu");
  const contentNavbar = document.getElementById("content-navbar-items");
  const closeButton = document.querySelector(".btn-menu-close");

  //   Aberta do menu e ativamento da máscara de fundo
  menuNavbar.addEventListener("click", (event) => {
    event.preventDefault();

    mask.style.display = "flex";
    contentNavbar.style.right = "0";
    contentNavbar.style.animation = "animate-open-menu .3s ease-out";
  });

  //   Fechamento do menu e desligamento da máscara de fundo
  closeButton.addEventListener("click", (event) => {
    event.preventDefault();

    mask.style.display = "none";
    contentNavbar.style.right = "-300px";
    contentNavbar.style.animation = "animate-close-menu .3s ease-in";
  });
}

export default Navbar;
