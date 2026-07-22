/*
 * Desktop section dropdowns.
 *
 * On wide screens the primary sidebar is hidden, so each top tab grows a
 * dropdown listing that section's pages. The dropdown is built from the same
 * navigation the sidebar already contains, and is designed to be reachable and
 * operable by keyboard, not only by hover:
 *
 *   - Focusing a tab link reveals its dropdown (CSS :focus-within), so Tab
 *     walks straight from the tab into its page list.
 *   - aria-haspopup / aria-expanded announce the relationship to assistive tech.
 *   - Escape closes the dropdown and returns focus to the tab link.
 */

function normalizePath(url) {
  const path = new URL(url, window.location.href).pathname;
  return path.endsWith("/") ? path : `${path}/`;
}

function buildTabMenus() {
  const primaryNavigation = document.querySelector(
    '.md-sidebar--primary nav[data-md-level="0"]'
  );

  if (!primaryNavigation) return;

  document.querySelectorAll(".md-tabs__item").forEach((tab) => {
    if (tab.querySelector(".ai-tab-menu")) return;

    const tabLink = tab.querySelector(":scope > .md-tabs__link");
    if (!tabLink) return;

    const tabPath = normalizePath(tabLink.href);
    const matchingLink = Array.from(
      primaryNavigation.querySelectorAll("a.md-nav__link")
    ).find((link) => normalizePath(link.href) === tabPath);

    const section = matchingLink?.closest(".md-nav__item--nested");
    const nestedNavigation = section?.querySelector(":scope > nav");
    if (!nestedNavigation) return;

    const links = Array.from(
      nestedNavigation.querySelectorAll("a.md-nav__link")
    );

    if (!links.length) return;

    const label = tabLink.textContent.trim();
    const menu = document.createElement("ul");
    menu.className = "ai-tab-menu";
    if (links.length > 7) menu.classList.add("ai-tab-menu--wide");
    menu.setAttribute("aria-label", `${label} pages`);

    links.forEach((link) => {
      const item = document.createElement("li");
      const menuLink = document.createElement("a");
      menuLink.href = link.href;
      menuLink.textContent = link.textContent.trim();
      item.appendChild(menuLink);
      menu.appendChild(item);
    });

    tabLink.setAttribute("aria-haspopup", "true");
    tabLink.setAttribute("aria-expanded", "false");
    tab.appendChild(menu);

    const setExpanded = (open) => {
      tabLink.setAttribute("aria-expanded", open ? "true" : "false");
    };

    // Keep the announced state in sync with the CSS hover/focus reveal, unless
    // the dropdown has been explicitly collapsed with Escape.
    tab.addEventListener("focusin", () => {
      if (!menu.classList.contains("ai-tab-menu--collapsed")) setExpanded(true);
    });
    tab.addEventListener("mouseenter", () => {
      menu.classList.remove("ai-tab-menu--collapsed");
      setExpanded(true);
    });
    tab.addEventListener("mouseleave", () => {
      if (!tab.contains(document.activeElement)) setExpanded(false);
    });
    tab.addEventListener("focusout", (event) => {
      if (!tab.contains(event.relatedTarget)) {
        // Focus has left the section entirely; reset for the next open.
        menu.classList.remove("ai-tab-menu--collapsed");
        setExpanded(false);
      }
    });

    // Escape collapses the dropdown and returns focus to the tab link. The
    // collapse survives the returning focus so the list actually closes.
    tab.addEventListener("keydown", (event) => {
      if (event.key !== "Escape") return;
      menu.classList.add("ai-tab-menu--collapsed");
      setExpanded(false);
      tabLink.focus();
    });
  });
}

document.addEventListener("DOMContentLoaded", buildTabMenus);
