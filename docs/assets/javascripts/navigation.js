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

function makeDrawerKeyboardAccessible() {
  const toggle = document.querySelector('input[data-md-toggle="drawer"]');
  const trigger = document.querySelector('label.md-header__button[for="__drawer"]');
  const primaryNavigation = document.querySelector(
    '.md-sidebar--primary nav[data-md-level="0"]'
  );

  if (!toggle || !trigger || !primaryNavigation) return;

  if (!primaryNavigation.id) primaryNavigation.id = "site-navigation";
  trigger.setAttribute("role", "button");
  trigger.setAttribute("tabindex", "0");
  trigger.setAttribute("aria-label", "Navigation menu");
  trigger.setAttribute("aria-controls", primaryNavigation.id);

  const syncExpanded = () => {
    trigger.setAttribute("aria-expanded", toggle.checked ? "true" : "false");
  };

  const closeDrawer = ({ returnFocus = true } = {}) => {
    if (!toggle.checked) return false;
    toggle.checked = false;
    toggle.dispatchEvent(new Event("change", { bubbles: true }));
    if (returnFocus) trigger.focus();
    return true;
  };

  const visibleNavigationFocusables = () =>
    Array.from(
      primaryNavigation.querySelectorAll(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      )
    ).filter((element) => element.getClientRects().length > 0);

  let drawerFocusables = [];
  const refreshDrawerFocusables = () => {
    drawerFocusables = visibleNavigationFocusables();
    return drawerFocusables;
  };

  trigger.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    event.preventDefault();
    event.stopPropagation();
    toggle.checked = !toggle.checked;
    toggle.dispatchEvent(new Event("change", { bubbles: true }));

    if (toggle.checked) {
      window.setTimeout(() => {
        refreshDrawerFocusables()[0]?.focus();
      }, 50);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && closeDrawer()) event.preventDefault();

    if (event.key !== "Tab" || !toggle.checked) return;
    if (!drawerFocusables.length) refreshDrawerFocusables();
    const cycle = [trigger, ...drawerFocusables];
    if (cycle.length === 1) {
      event.preventDefault();
      trigger.focus();
      return;
    }

    event.preventDefault();
    const step = event.shiftKey ? -1 : 1;
    let index = cycle.indexOf(document.activeElement);
    if (index === -1) index = 0;
    for (let attempts = 0; attempts < cycle.length; attempts += 1) {
      index = (index + step + cycle.length) % cycle.length;
      const candidate = cycle[index];
      const currentlyFocusable = candidate === trigger || (
        candidate.getClientRects().length > 0 &&
        candidate.matches(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )
      );
      if (!currentlyFocusable) continue;
      candidate.focus();
      if (document.activeElement === candidate) return;
    }
    trigger.focus();
  });

  document.addEventListener("focusin", (event) => {
    if (!toggle.checked) return;
    if (event.target === trigger || primaryNavigation.contains(event.target)) return;
    (drawerFocusables[0] || refreshDrawerFocusables()[0])?.focus();
  });

  const desktopQuery = window.matchMedia("(min-width: 76.25em)");
  const closeOnDesktop = (event) => {
    const wasOpen = trigger.getAttribute("aria-expanded") === "true";
    if (!event.matches || !wasOpen) return;
    if (toggle.checked) closeDrawer({ returnFocus: false });
    else syncExpanded();
    window.requestAnimationFrame(() => {
      document.querySelector("a.md-header__button.md-logo")?.focus();
    });
  };
  desktopQuery.addEventListener("change", closeOnDesktop);
  toggle.addEventListener("change", () => {
    if (toggle.checked) refreshDrawerFocusables();
    else drawerFocusables = [];
    syncExpanded();
  });
  syncExpanded();
}

document.addEventListener("DOMContentLoaded", () => {
  buildTabMenus();
  makeDrawerKeyboardAccessible();
});
