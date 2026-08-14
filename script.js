const menuButton = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuButton?.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", open ? "true" : "false");
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});

// Replace this with the real Mamouth Coin contract address.
const CONTRACT_ADDRESS = "PASTE-YOUR-CONTRACT-ADDRESS-HERE";

document.querySelector(".copy-btn")?.addEventListener("click", async (event) => {
  const button = event.currentTarget;

  if (CONTRACT_ADDRESS.includes("PASTE-YOUR")) {
    button.textContent = "Add CA first";
    setTimeout(() => button.textContent = "Copy CA", 1600);
    return;
  }

  try {
    await navigator.clipboard.writeText(CONTRACT_ADDRESS);
    button.textContent = "Copied!";
    setTimeout(() => button.textContent = "Copy CA", 1600);
  } catch {
    button.textContent = "Copy failed";
    setTimeout(() => button.textContent = "Copy CA", 1600);
  }
});
