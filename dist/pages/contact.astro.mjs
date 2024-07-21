/* empty css                                 */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_tqnbfIGh.mjs';
import 'kleur/colors';
import { $ as $$Container, a as $$Layout } from '../chunks/Layout_D5oFyoPH.mjs';
import { $ as $$Icon } from '../chunks/Icon_BwLPhBGC.mjs';
export { renderers } from '../renderers.mjs';

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Contact" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="grid md:grid-cols-2 gap-10 mx-auto max-w-4xl mt-16"> <div> <h2 class="font-medium text-2xl text-gray-800">Contact the BIE team</h2> <p class="text-lg leading-relaxed text-slate-800 mt-3">
Have something to say? We are here to help. Submit an issue on GitHub
          to report a bug, request a feature, or ask a question and we'll get
          back to you as soon as possible.
</p> <div class="mt-5"> <div class="flex items-center mt-2 space-x-2 text-gray-600 border border-black w-fit py-2 px-4 rounded-sm"> ${renderComponent($$result3, "Icon", $$Icon, { "class": "text-gray-700 w-4 h-4", "name": "uil:github" })}<a href="https://github.com/seancswanson/breakers-injury-reference">Visit our GitHub repo</a> </div> </div> </div> </div> ` })} ` })}`;
}, "/Users/SSwanson/DEV/breakers-injury-reference/src/pages/contact.astro", void 0);

const $$file = "/Users/SSwanson/DEV/breakers-injury-reference/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
