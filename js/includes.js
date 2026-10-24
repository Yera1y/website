async function loadIncludes() {
  const includeTargets = document.querySelectorAll("[data-include]");

  await Promise.all([...includeTargets].map(async (target) => {
    const partialPath = target.getAttribute("data-include");
    const response = await fetch(partialPath);

    if (!response.ok) {
      throw new Error(`Could not load shared partial: ${partialPath}`);
    }

    target.innerHTML = await response.text();
  }));

  setActiveMenuItem();
}

function setActiveMenuItem() {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";

  document.querySelectorAll(".paper-entry[href]").forEach((link) => {
    const linkPage = link.pathname.split("/").pop();
    const isCurrentPage = linkPage === currentPage && !link.hash;

    link.classList.toggle("active", isCurrentPage);
    if (isCurrentPage) {
      link.setAttribute("aria-current", "page");
    }
  });
}

loadIncludes().catch((error) => {
  console.error(error);
});
