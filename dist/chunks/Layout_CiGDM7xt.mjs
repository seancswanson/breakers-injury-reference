import { c as createComponent, r as renderTemplate, m as maybeRenderHead, h as renderSlot, f as addAttribute, g as createAstro, s as spreadAttributes, u as unescapeHTML, a as renderComponent, i as defineScriptVars, F as Fragment, j as renderHead } from './astro/server_tqnbfIGh.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */

const $$Container = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="max-w-7xl mx-auto px-10"> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "/Users/SSwanson/DEV/breakers-injury-reference/src/components/container.astro", void 0);

const $$Astro$k = createAstro();
const $$OpenGraphArticleTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$k, $$props, $$slots);
  Astro2.self = $$OpenGraphArticleTags;
  const { publishedTime, modifiedTime, expirationTime, authors, section, tags } = Astro2.props.openGraph.article;
  return renderTemplate`${publishedTime ? renderTemplate`<meta property="article:published_time"${addAttribute(publishedTime, "content")}>` : null}${modifiedTime ? renderTemplate`<meta property="article:modified_time"${addAttribute(modifiedTime, "content")}>` : null}${expirationTime ? renderTemplate`<meta property="article:expiration_time"${addAttribute(expirationTime, "content")}>` : null}${authors ? authors.map((author) => renderTemplate`<meta property="article:author"${addAttribute(author, "content")}>`) : null}${section ? renderTemplate`<meta property="article:section"${addAttribute(section, "content")}>` : null}${tags ? tags.map((tag) => renderTemplate`<meta property="article:tag"${addAttribute(tag, "content")}>`) : null}`;
}, "/Users/SSwanson/DEV/breakers-injury-reference/node_modules/.pnpm/astro-seo@0.8.4_typescript@5.5.3/node_modules/astro-seo/src/components/OpenGraphArticleTags.astro", void 0);

const $$Astro$j = createAstro();
const $$OpenGraphBasicTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$j, $$props, $$slots);
  Astro2.self = $$OpenGraphBasicTags;
  const { openGraph } = Astro2.props;
  return renderTemplate`<meta property="og:title"${addAttribute(openGraph.basic.title, "content")}><meta property="og:type"${addAttribute(openGraph.basic.type, "content")}><meta property="og:image"${addAttribute(openGraph.basic.image, "content")}><meta property="og:url"${addAttribute(openGraph.basic.url || Astro2.url.href, "content")}>`;
}, "/Users/SSwanson/DEV/breakers-injury-reference/node_modules/.pnpm/astro-seo@0.8.4_typescript@5.5.3/node_modules/astro-seo/src/components/OpenGraphBasicTags.astro", void 0);

const $$Astro$i = createAstro();
const $$OpenGraphImageTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$i, $$props, $$slots);
  Astro2.self = $$OpenGraphImageTags;
  const { image } = Astro2.props.openGraph.basic;
  const { secureUrl, type, width, height, alt } = Astro2.props.openGraph.image;
  return renderTemplate`<meta property="og:image:url"${addAttribute(image, "content")}>${secureUrl ? renderTemplate`<meta property="og:image:secure_url"${addAttribute(secureUrl, "content")}>` : null}${type ? renderTemplate`<meta property="og:image:type"${addAttribute(type, "content")}>` : null}${width ? renderTemplate`<meta property="og:image:width"${addAttribute(width, "content")}>` : null}${height ? renderTemplate`<meta property="og:image:height"${addAttribute(height, "content")}>` : null}${alt ? renderTemplate`<meta property="og:image:alt"${addAttribute(alt, "content")}>` : null}`;
}, "/Users/SSwanson/DEV/breakers-injury-reference/node_modules/.pnpm/astro-seo@0.8.4_typescript@5.5.3/node_modules/astro-seo/src/components/OpenGraphImageTags.astro", void 0);

const $$Astro$h = createAstro();
const $$OpenGraphOptionalTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots);
  Astro2.self = $$OpenGraphOptionalTags;
  const { optional } = Astro2.props.openGraph;
  return renderTemplate`${optional.audio ? renderTemplate`<meta property="og:audio"${addAttribute(optional.audio, "content")}>` : null}${optional.description ? renderTemplate`<meta property="og:description"${addAttribute(optional.description, "content")}>` : null}${optional.determiner ? renderTemplate`<meta property="og:determiner"${addAttribute(optional.determiner, "content")}>` : null}${optional.locale ? renderTemplate`<meta property="og:locale"${addAttribute(optional.locale, "content")}>` : null}${optional.localeAlternate?.map((locale) => renderTemplate`<meta property="og:locale:alternate"${addAttribute(locale, "content")}>`)}${optional.siteName ? renderTemplate`<meta property="og:site_name"${addAttribute(optional.siteName, "content")}>` : null}${optional.video ? renderTemplate`<meta property="og:video"${addAttribute(optional.video, "content")}>` : null}`;
}, "/Users/SSwanson/DEV/breakers-injury-reference/node_modules/.pnpm/astro-seo@0.8.4_typescript@5.5.3/node_modules/astro-seo/src/components/OpenGraphOptionalTags.astro", void 0);

const $$Astro$g = createAstro();
const $$ExtendedTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$ExtendedTags;
  const { props } = Astro2;
  return renderTemplate`${props.extend.link?.map((attributes) => renderTemplate`<link${spreadAttributes(attributes)}>`)}${props.extend.meta?.map(({ content, httpEquiv, media, name, property }) => renderTemplate`<meta${addAttribute(name, "name")}${addAttribute(property, "property")}${addAttribute(content, "content")}${addAttribute(httpEquiv, "http-equiv")}${addAttribute(media, "media")}>`)}`;
}, "/Users/SSwanson/DEV/breakers-injury-reference/node_modules/.pnpm/astro-seo@0.8.4_typescript@5.5.3/node_modules/astro-seo/src/components/ExtendedTags.astro", void 0);

const $$Astro$f = createAstro();
const $$TwitterTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$TwitterTags;
  const { card, site, title, creator, description, image, imageAlt } = Astro2.props.twitter;
  return renderTemplate`${card ? renderTemplate`<meta name="twitter:card"${addAttribute(card, "content")}>` : null}${site ? renderTemplate`<meta name="twitter:site"${addAttribute(site, "content")}>` : null}${title ? renderTemplate`<meta name="twitter:title"${addAttribute(title, "content")}>` : null}${image ? renderTemplate`<meta name="twitter:image"${addAttribute(image, "content")}>` : null}${imageAlt ? renderTemplate`<meta name="twitter:image:alt"${addAttribute(imageAlt, "content")}>` : null}${description ? renderTemplate`<meta name="twitter:description"${addAttribute(description, "content")}>` : null}${creator ? renderTemplate`<meta name="twitter:creator"${addAttribute(creator, "content")}>` : null}`;
}, "/Users/SSwanson/DEV/breakers-injury-reference/node_modules/.pnpm/astro-seo@0.8.4_typescript@5.5.3/node_modules/astro-seo/src/components/TwitterTags.astro", void 0);

const $$Astro$e = createAstro();
const $$LanguageAlternatesTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$LanguageAlternatesTags;
  const { languageAlternates } = Astro2.props;
  return renderTemplate`${languageAlternates.map((alternate) => renderTemplate`<link rel="alternate"${addAttribute(alternate.hrefLang, "hreflang")}${addAttribute(alternate.href, "href")}>`)}`;
}, "/Users/SSwanson/DEV/breakers-injury-reference/node_modules/.pnpm/astro-seo@0.8.4_typescript@5.5.3/node_modules/astro-seo/src/components/LanguageAlternatesTags.astro", void 0);

const $$Astro$d = createAstro();
const $$SEO = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$SEO;
  Astro2.props.surpressWarnings = true;
  function validateProps(props) {
    if (props.openGraph) {
      if (!props.openGraph.basic || (props.openGraph.basic.title ?? void 0) == void 0 || (props.openGraph.basic.type ?? void 0) == void 0 || (props.openGraph.basic.image ?? void 0) == void 0) {
        throw new Error(
          "If you pass the openGraph prop, you have to at least define the title, type, and image basic properties!"
        );
      }
    }
    if (props.title && props.openGraph?.basic.title) {
      if (props.title == props.openGraph.basic.title && !props.surpressWarnings) {
        console.warn(
          "WARNING(astro-seo): You passed the same value to `title` and `openGraph.optional.title`. This is most likely not what you want. See docs for more."
        );
      }
    }
    if (props.openGraph?.basic?.image && !props.openGraph?.image?.alt && !props.surpressWarnings) {
      console.warn(
        "WARNING(astro-seo): You defined `openGraph.basic.image`, but didn't define `openGraph.image.alt`. This is strongly discouraged.'"
      );
    }
  }
  validateProps(Astro2.props);
  let updatedTitle = "";
  if (Astro2.props.title) {
    updatedTitle = Astro2.props.title;
    if (Astro2.props.titleTemplate) {
      updatedTitle = Astro2.props.titleTemplate.replace(/%s/g, updatedTitle);
    }
  } else if (Astro2.props.titleDefault) {
    updatedTitle = Astro2.props.titleDefault;
  }
  const baseUrl = Astro2.site ?? Astro2.url;
  const defaultCanonicalUrl = new URL(Astro2.url.pathname + Astro2.url.search, baseUrl);
  return renderTemplate`${updatedTitle ? renderTemplate`<title>${unescapeHTML(updatedTitle)}</title>` : null}${Astro2.props.charset ? renderTemplate`<meta${addAttribute(Astro2.props.charset, "charset")}>` : null}<link rel="canonical"${addAttribute(Astro2.props.canonical || defaultCanonicalUrl.href, "href")}>${Astro2.props.description ? renderTemplate`<meta name="description"${addAttribute(Astro2.props.description, "content")}>` : null}<meta name="robots"${addAttribute(`${Astro2.props.noindex ? "noindex" : "index"}, ${Astro2.props.nofollow ? "nofollow" : "follow"}`, "content")}>${Astro2.props.openGraph && renderTemplate`${renderComponent($$result, "OpenGraphBasicTags", $$OpenGraphBasicTags, { ...Astro2.props })}`}${Astro2.props.openGraph?.optional && renderTemplate`${renderComponent($$result, "OpenGraphOptionalTags", $$OpenGraphOptionalTags, { ...Astro2.props })}`}${Astro2.props.openGraph?.image && renderTemplate`${renderComponent($$result, "OpenGraphImageTags", $$OpenGraphImageTags, { ...Astro2.props })}`}${Astro2.props.openGraph?.article && renderTemplate`${renderComponent($$result, "OpenGraphArticleTags", $$OpenGraphArticleTags, { ...Astro2.props })}`}${Astro2.props.twitter && renderTemplate`${renderComponent($$result, "TwitterTags", $$TwitterTags, { ...Astro2.props })}`}${Astro2.props.extend && renderTemplate`${renderComponent($$result, "ExtendedTags", $$ExtendedTags, { ...Astro2.props })}`}${Astro2.props.languageAlternates && renderTemplate`${renderComponent($$result, "LanguageAlternatesTags", $$LanguageAlternatesTags, { ...Astro2.props })}`}`;
}, "/Users/SSwanson/DEV/breakers-injury-reference/node_modules/.pnpm/astro-seo@0.8.4_typescript@5.5.3/node_modules/astro-seo/src/SEO.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="my-20"> <p class="text-center text-xs text-slate-500 mt-1">
Made by <a href="https://seancswanson.com" target="_blank" rel="noopener" class="hover:underline">
Swanson Digital Arts
</a> </p> </footer>`;
}, "/Users/SSwanson/DEV/breakers-injury-reference/src/components/footer.astro", void 0);

const $$Astro$c = createAstro();
const $$Link = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$Link;
  const {
    href,
    block,
    size = "lg",
    style = "primary",
    class: className,
    ...rest
  } = Astro2.props;
  const sizes = {
    lg: "px-5 py-2.5",
    md: "px-4 py-2"
  };
  const styles = {
    outline: "bg-white border-2 border-black hover:bg-gray-100 text-black ",
    primary: "bg-black text-white hover:bg-gray-800  border-2 border-transparent",
    inverted: "bg-white text-black   border-2 border-transparent",
    muted: "bg-gray-100 hover:bg-gray-200   border-2 border-transparent"
  };
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${spreadAttributes(rest)}${addAttribute([
    "rounded text-center transition focus-visible:ring-2 ring-offset-2 ring-gray-200",
    block && "w-full",
    sizes[size],
    styles[style],
    className
  ], "class:list")}>${renderSlot($$result, $$slots["default"])} </a>`;
}, "/Users/SSwanson/DEV/breakers-injury-reference/src/components/ui/link.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Astro$b = createAstro();
const $$Astronav = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Astronav;
  const { closeOnClick = false } = Astro2.props;
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", " <script>(function(){", '\n["DOMContentLoaded", "astro:after-swap"].forEach((event) => {\n  document.addEventListener(event, addListeners);\n});\n\n// Function to clone and replace elements\nfunction cloneAndReplace(element) {\n  const clone = element.cloneNode(true);\n  element.parentNode.replaceChild(clone, element);\n}\n\nfunction addListeners() {\n  // Clean up existing listeners\n  const oldMenuButton = document.getElementById("astronav-menu");\n  if (oldMenuButton) {\n    cloneAndReplace(oldMenuButton);\n  }\n\n  const oldDropdownMenus = document.querySelectorAll(".astronav-dropdown");\n  oldDropdownMenus.forEach((menu) => {\n    cloneAndReplace(menu);\n  });\n\n  // Mobile nav toggle\n  const menuButton = document.getElementById("astronav-menu");\n  menuButton && menuButton.addEventListener("click", toggleMobileNav);\n\n  // Dropdown menus\n  const dropdownMenus = document.querySelectorAll(".astronav-dropdown");\n  dropdownMenus.forEach((menu) => {\n    const button = menu.querySelector("button");\n    button &&\n      button.addEventListener("click", (event) =>\n        toggleDropdownMenu(event, menu, dropdownMenus)\n      );\n\n    // Handle Submenu Dropdowns\n    const dropDownSubmenus = menu.querySelectorAll(\n      ".astronav-dropdown-submenu"\n    );\n\n    dropDownSubmenus.forEach((submenu) => {\n      const submenuButton = submenu.querySelector("button");\n      submenuButton &&\n        submenuButton.addEventListener("click", (event) => {\n          event.stopImmediatePropagation();\n          toggleSubmenuDropdown(event, submenu);\n        });\n    });\n  });\n\n  // Clicking away from dropdown will remove the dropdown class\n  document.addEventListener("click", closeAllDropdowns);\n\n  if (closeOnClick) {\n    handleCloseOnClick();\n  }\n}\n\nfunction toggleMobileNav() {\n  [...document.querySelectorAll(".astronav-toggle")].forEach((el) => {\n    el.classList.toggle("hidden");\n  });\n}\n\nfunction toggleDropdownMenu(event, menu, dropdownMenus) {\n  toggleMenu(menu);\n\n  // Close one dropdown when selecting another\n  Array.from(dropdownMenus)\n    .filter((el) => el !== menu && !menu.contains(el))\n    .forEach(closeMenu);\n\n  event.stopPropagation();\n}\n\nfunction toggleSubmenuDropdown(event, submenu) {\n  event.stopPropagation();\n  toggleMenu(submenu);\n\n  // Close sibling submenus at the same nesting level\n  const siblingSubmenus = submenu\n    .closest(".astronav-dropdown")\n    .querySelectorAll(".astronav-dropdown-submenu");\n  Array.from(siblingSubmenus)\n    .filter((el) => el !== submenu && !submenu.contains(el))\n    .forEach(closeMenu);\n}\n\nfunction closeAllDropdowns(event) {\n  const dropdownMenus = document.querySelectorAll(".dropdown-toggle");\n  const dropdownParent = document.querySelectorAll(\n    ".astronav-dropdown, .astronav-dropdown-submenu"\n  );\n  const isButtonInsideDropdown = [\n    ...document.querySelectorAll(\n      ".astronav-dropdown button, .astronav-dropdown-submenu button, #astronav-menu"\n    ),\n  ].some((button) => button.contains(event.target));\n  if (!isButtonInsideDropdown) {\n    dropdownMenus.forEach((d) => {\n      // console.log("I ran", d);\n      // if (!d.contains(event.target)) {\n      d.classList.remove("open");\n      d.removeAttribute("open");\n      d.classList.add("hidden");\n      // }\n    });\n    dropdownParent.forEach((d) => {\n      d.classList.remove("open");\n      d.removeAttribute("open");\n      d.setAttribute("aria-expanded", "false");\n    });\n  }\n}\n\nfunction toggleMenu(menu) {\n  menu.classList.toggle("open");\n  const expanded = menu.getAttribute("aria-expanded") === "true";\n  menu.setAttribute("aria-expanded", expanded ? "false" : "true");\n  menu.hasAttribute("open")\n    ? menu.removeAttribute("open")\n    : menu.setAttribute("open", "");\n\n  const dropdownToggle = menu.querySelector(".dropdown-toggle");\n  const dropdownExpanded = dropdownToggle.getAttribute("aria-expanded");\n  dropdownToggle.classList.toggle("hidden");\n  dropdownToggle.setAttribute(\n    "aria-expanded",\n    dropdownExpanded === "true" ? "false" : "true"\n  );\n}\n\nfunction closeMenu(menu) {\n  // console.log("closing", menu);\n  menu.classList.remove("open");\n  menu.removeAttribute("open");\n  menu.setAttribute("aria-expanded", "false");\n  const dropdownToggles = menu.querySelectorAll(".dropdown-toggle");\n  dropdownToggles.forEach((toggle) => {\n    toggle.classList.add("hidden");\n    toggle.setAttribute("aria-expanded", "false");\n  });\n}\n\nfunction handleCloseOnClick() {\n  const navMenuItems = document.querySelector(".astronav-items");\n  const navToggle = document.getElementById("astronav-menu");\n  const navLink = navMenuItems && navMenuItems.querySelectorAll("a");\n\n  const MenuIcons = navToggle.querySelectorAll(".astronav-toggle");\n\n  navLink &&\n    navLink.forEach((item) => {\n      item.addEventListener("click", () => {\n        navMenuItems?.classList.add("hidden");\n        MenuIcons.forEach((el) => {\n          el.classList.toggle("hidden");\n        });\n      });\n    });\n}\n})();<\/script>'])), renderSlot($$result, $$slots["default"]), defineScriptVars({ closeOnClick }));
}, "/Users/SSwanson/DEV/breakers-injury-reference/node_modules/.pnpm/astro-navbar@2.3.3/node_modules/astro-navbar/src/Astronav.astro", void 0);

const $$Astro$a = createAstro();
const $$MenuIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$MenuIcon;
  const { class: className, ...rest } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<button id="astronav-menu" aria-label="Toggle Menu"> ${renderSlot($$result, $$slots["default"], renderTemplate` <svg fill="currentColor"${addAttribute([className], "class:list")} width="24" height="24" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg"${spreadAttributes(rest)}> <title>Toggle Menu</title> <path class="astronav-close-icon astronav-toggle hidden" fill-rule="evenodd" clip-rule="evenodd" d="M18.278 16.864a1 1 0 01-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 01-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 011.414-1.414l4.829 4.828 4.828-4.828a1 1 0 111.414 1.414l-4.828 4.829 4.828 4.828z"></path> <path class="astronav-open-icon astronav-toggle" fill-rule="evenodd" d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z"></path> </svg> `)} </button>`;
}, "/Users/SSwanson/DEV/breakers-injury-reference/node_modules/.pnpm/astro-navbar@2.3.3/node_modules/astro-navbar/src/components/MenuIcon.astro", void 0);

const $$Astro$9 = createAstro();
const $$OpenIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$OpenIcon;
  const { class: className, ...rest } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<span${addAttribute(["astronav-open-icon astronav-toggle", className], "class:list")}${spreadAttributes(rest)}>${renderSlot($$result, $$slots["default"])}</span>`;
}, "/Users/SSwanson/DEV/breakers-injury-reference/node_modules/.pnpm/astro-navbar@2.3.3/node_modules/astro-navbar/src/components/OpenIcon.astro", void 0);

const $$Astro$8 = createAstro();
const $$CloseIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$CloseIcon;
  const { class: className, ...rest } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<span${addAttribute(["astronav-close-icon astronav-toggle hidden", className], "class:list")}${spreadAttributes(rest)}> ${renderSlot($$result, $$slots["default"])} </span>`;
}, "/Users/SSwanson/DEV/breakers-injury-reference/node_modules/.pnpm/astro-navbar@2.3.3/node_modules/astro-navbar/src/components/CloseIcon.astro", void 0);

const $$Astro$7 = createAstro();
const $$MenuItems = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$MenuItems;
  const { class: className, ...rest } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<nav${addAttribute(["astronav-items astronav-toggle", className], "class:list")}${spreadAttributes(rest)}> ${renderSlot($$result, $$slots["default"])} </nav>`;
}, "/Users/SSwanson/DEV/breakers-injury-reference/node_modules/.pnpm/astro-navbar@2.3.3/node_modules/astro-navbar/src/components/MenuItems.astro", void 0);

const $$Astro$6 = createAstro();
const $$Dropdown$1 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Dropdown$1;
  const { class: className, ...rest } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<menu${addAttribute(["astronav-dropdown", className], "class:list")}${spreadAttributes(rest)} aria-expanded="false">${renderSlot($$result, $$slots["default"])}</menu>`;
}, "/Users/SSwanson/DEV/breakers-injury-reference/node_modules/.pnpm/astro-navbar@2.3.3/node_modules/astro-navbar/src/components/Dropdown.astro", void 0);

const $$Astro$5 = createAstro();
const $$DropdownSubmenu = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$DropdownSubmenu;
  const { class: className, ...rest } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["astronav-dropdown-submenu", className], "class:list")}${spreadAttributes(rest)} aria-expanded="false"> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "/Users/SSwanson/DEV/breakers-injury-reference/node_modules/.pnpm/astro-navbar@2.3.3/node_modules/astro-navbar/src/components/DropdownSubmenu.astro", void 0);

const $$Astro$4 = createAstro();
const $$DropdownItems = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$DropdownItems;
  const { class: className, ...rest } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["astronav-dropdown dropdown-toggle hidden", className], "class:list")}${spreadAttributes(rest)} aria-expanded="false"> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "/Users/SSwanson/DEV/breakers-injury-reference/node_modules/.pnpm/astro-navbar@2.3.3/node_modules/astro-navbar/src/components/DropdownItems.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$3 = createAstro();
const $$StickyHeader = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$StickyHeader;
  const {
    scrollY = 100,
    defaultClass = "",
    activeClass = "",
    class: className = "",
    ...rest
  } = Astro2.props;
  return renderTemplate(_a || (_a = __template(["", "<header", "", "> ", " </header> <script>(function(){", '\nlet scrollPos = 0;\nlet ticking = false;\n\nfunction OnScroll(scrollPos) {\n  const headers = document.querySelectorAll(".astronav-sticky-header");\n  const classArray = activeClass.split(" ");\n  const replaceArray = defaultClass.split(" ");\n\n  headers.forEach((header) => {\n    if (scrollPos > scrollY) {\n      header.classList.remove(...replaceArray);\n      header.classList.add("is-active", ...classArray);\n      header.setAttribute("active", "");\n    }\n    //reduce the scrollY to avoid flickering when scrolling up\n    if (scrollPos < Math.max(scrollY - 40, 10)) {\n      header.classList.remove("is-active", ...classArray);\n      header.classList.add(...replaceArray);\n      header.removeAttribute("active");\n    }\n  });\n}\n\n// Scroll event throttling as per MDN\n// https://developer.mozilla.org/en-US/docs/Web/API/Document/scroll_event\n\ndocument.addEventListener("scroll", (event) => {\n  scrollPos = window.scrollY;\n  if (!ticking) {\n    window.requestAnimationFrame(() => {\n      OnScroll(scrollPos);\n      ticking = false;\n    });\n\n    ticking = true;\n  }\n});\n})();<\/script>'])), maybeRenderHead(), addAttribute(["astronav-sticky-header", className, defaultClass], "class:list"), spreadAttributes(rest), renderSlot($$result, $$slots["default"]), defineScriptVars({ scrollY, defaultClass, activeClass }));
}, "/Users/SSwanson/DEV/breakers-injury-reference/node_modules/.pnpm/astro-navbar@2.3.3/node_modules/astro-navbar/src/components/StickyHeader.astro", void 0);

const $$Astro$2 = createAstro();
const $$Dropdown = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Dropdown;
  const { title, lastItem, children } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li class="relative"> ${renderComponent($$result, "DropdownContainer", $$Dropdown$1, { "class": "group" }, { "default": ($$result2) => renderTemplate` <button class="flex items-center gap-1 w-full lg:w-auto lg:px-3 py-2 text-gray-600 hover:text-gray-900"> <span>${title}</span> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-3 h-3 mt-0.5 group-open:rotate-180"> <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path> </svg> </button> ${renderComponent($$result2, "DropdownItems", $$DropdownItems, {}, { "default": ($$result3) => renderTemplate` <div${addAttribute([
    "lg:absolute w-full lg:w-48 z-10",
    lastItem ? "lg:right-0 origin-top-right" : "lg:left-0 origin-top-left"
  ], "class:list")}> <div class="px-3 lg:py-2 lg:bg-white lg:rounded-md lg:shadow lg:border flex flex-col"> ${children.map((item) => renderTemplate`<a${addAttribute(item.path, "href")} class="py-1 text-gray-600 hover:text-gray-900"> ${item.title} </a>`)} </div> </div> ` })} ` })} </li>`;
}, "/Users/SSwanson/DEV/breakers-injury-reference/src/components/navbar/dropdown.astro", void 0);

const $$Astro$1 = createAstro();
const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Navbar;
  const menuitems = [
    {
      title: "Features",
      path: "#",
      children: [
        { title: "Movement Library", path: "/" },
        { title: "Anatomy Guide", path: "#" },
        { title: "Injury Tracker", path: "/404" }
      ]
    },
    {
      title: "About",
      path: "/about"
    },
    {
      title: "Contact",
      path: "/contact"
    }
  ];
  return renderTemplate`${renderComponent($$result, "Container", $$Container, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<header class="flex flex-col lg:flex-row justify-between items-center my-5"> ${renderComponent($$result2, "Astronav", $$Astronav, {}, { "default": ($$result3) => renderTemplate` <div class="flex w-full lg:w-auto items-center justify-between"> <a href="/" class="text-lg flex flex-col"><span class="font-bold text-slate-800">The</span> <span class="font-bold text-slate-800 mt-[-14px]">Breaker's Injury Reference</span> </a> <div class="block lg:hidden"> ${renderComponent($$result3, "MenuIcon", $$MenuIcon, { "class": "w-4 h-4 text-gray-800" })} </div> </div> ${renderComponent($$result3, "MenuItems", $$MenuItems, { "class": "hidden w-full lg:w-auto mt-2 lg:flex lg:mt-0" }, { "default": ($$result4) => renderTemplate` <ul class="flex flex-col lg:flex-row lg:gap-3"> ${menuitems.map((item, index) => renderTemplate`${renderComponent($$result4, "Fragment", Fragment, {}, { "default": ($$result5) => renderTemplate`${item.children && renderTemplate`${renderComponent($$result5, "Dropdown", $$Dropdown, { "title": item.title, "children": item.children, "lastItem": index === menuitems.length - 1 })}`}${!item.children && renderTemplate`<li> <a${addAttribute(item.path, "href")} class="flex lg:px-3 py-2 items-center text-gray-600 hover:text-gray-900"> <span> ${item.title}</span> ${item.badge && renderTemplate`<span class="ml-1 px-2 py-0.5 text-[10px] animate-pulse font-semibold uppercase text-white bg-indigo-600 rounded-full">
New
</span>`} </a> </li>`}` })}`)} </ul> <div class="lg:hidden flex items-center mt-3 gap-4"> ${renderComponent($$result4, "Link", $$Link, { "href": "#", "style": "muted", "block": true, "size": "md" }, { "default": ($$result5) => renderTemplate`Log in` })} ${renderComponent($$result4, "Link", $$Link, { "href": "#", "size": "md", "block": true }, { "default": ($$result5) => renderTemplate`Sign up` })} </div> ` })} ` })} <div> <div class="hidden lg:flex items-center gap-4"> <a href="#">Log in</a> ${renderComponent($$result2, "Link", $$Link, { "href": "#", "size": "md" }, { "default": ($$result3) => renderTemplate`Sign up` })} </div> </div> </header> ` })}`;
}, "/Users/SSwanson/DEV/breakers-injury-reference/src/components/navbar/navbar.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site).toString();
  const resolvedImageWithDomain = new URL(
    "/opengraph.jpg",
    Astro2.site
  ).toString();
  const { title } = Astro2.props;
  const makeTitle = title ? title + " | The Breaker's Injury Reference" : "The Breaker's Injury Reference";
  return renderTemplate`<html lang="en" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><!-- <link rel="preload" as="image" href={src} alt="Hero" /> -->${renderComponent($$result, "SEO", $$SEO, { "title": makeTitle, "description": "The Breaker's Injury Reference empowers dancers with knowledge to protect their bodies while perfecting their craft. Explore 3D models, learn about injury risks, and discover preventive techniques for a sustainable dance career.", "canonical": canonicalURL, "openGraph": {
    basic: {
      url: canonicalURL,
      type: "website",
      title: `${makeTitle}`,
      image: resolvedImageWithDomain
    },
    image: {
      alt: "The Breaker's Injury Reference Screenshot"
    }
  }, "data-astro-cid-sckkx6r4": true })}${renderHead()}</head> <body data-astro-cid-sckkx6r4> <div class="grain-overlay" data-astro-cid-sckkx6r4></div> ${renderComponent($$result, "Navbar", $$Navbar, { "data-astro-cid-sckkx6r4": true })} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-sckkx6r4": true })}  </body> </html> `;
}, "/Users/SSwanson/DEV/breakers-injury-reference/src/layouts/Layout.astro", void 0);

export { $$Container as $, $$Layout as a, $$Link as b };
