document.addEventListener("DOMContentLoaded", () => loadScript());

const loadScript = () => {
  const toggleBtn = document.querySelector(".toggle_btn");
  const toggleBtnIcon = document.querySelector(".toggle_btn i");
  const dropDowMenu = document.querySelector(".dropdown_menu");
  const hero = document.querySelector("#hero");

  const wrapper = document.querySelector(".wrapper");
  const loginLink = document.querySelector(".login-link");
  const registerLink = document.querySelector(".register-link");
  const allBtnPopup = document.querySelectorAll(".action_btn");
  const iconClose = document.querySelector(".icon-close");

  const query = new URLSearchParams(document.location.search);
  const estadoModal = query.get("modal-state");

  toggleBtn.onclick = function () {
    dropDowMenu.classList.toggle("open");
    hero.classList.toggle("open");
  };

  // API para modal
  const abrirModal = () => {
    wrapper?.classList.add("active-popup");
  };

  const cerrarModal = () => {
    wrapper?.classList.remove("active-popup");
  };

  const definirEstadoModal = ({ esRegistro }) => {
    if (esRegistro) {
      // Register
      wrapper?.classList.add("active");
    } else {
      // Login
      wrapper?.classList.remove("active");
    }
  };

  registerLink.addEventListener("click", () => {
    definirEstadoModal({ esRegistro: true });
  });

  loginLink.addEventListener("click", () => {
    definirEstadoModal({ esRegistro: false });
  });

  allBtnPopup.forEach((btn) =>
    btn.addEventListener("click", () => {
      abrirModal();
    })
  );

  iconClose.addEventListener("click", () => {
    cerrarModal();
  });

  if (
    ["login", "register"].includes(estadoModal)
  ) {
    abrirModal();
    definirEstadoModal({ esRegistro: estadoModal == "register" })
  }
};
