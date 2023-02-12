import { b as buildAssetsURL } from './paths.mjs';
import { _ as __nuxt_component_0$1 } from './server.mjs';
import { useSSRContext, ref, unref, mergeProps, withCtx, createTextVNode, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderAttr, ssrRenderComponent, ssrRenderSlot, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';
import 'ufo';
import './config.mjs';
import 'destr';
import 'scule';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'h3';
import '@unhead/vue';
import '@unhead/dom';
import '@unhead/ssr';
import 'vue-router';
import 'defu';

const _imports_0 = "" + buildAssetsURL("favicon.a68e9941.png");
const _sfc_main$2 = {
  __name: "Hamburger",
  __ssrInlineRender: true,
  setup(__props) {
    const isOpen = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-fa277206><button class="${ssrRenderClass([unref(isOpen) ? "opened" : null, "menu"])}"${ssrRenderAttr("aria-expanded", unref(isOpen))} aria-label="Main Menu" data-v-fa277206><svg width="50" height="50" viewBox="0 0 100 100" data-v-fa277206><path class="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" data-v-fa277206></path><path class="line line2" d="M 20,50 H 80" data-v-fa277206></path><path class="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" data-v-fa277206></path></svg></button></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Hamburger.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const Hamburger = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-fa277206"]]);
const _sfc_main$1 = {
  __name: "Navbar",
  __ssrInlineRender: true,
  setup(__props) {
    const navMenu = ref([
      {
        title: "Home",
        url: "/"
      },
      {
        title: "Service",
        url: "/services"
      },
      {
        title: "Pricing",
        url: "#pricing"
      },
      {
        title: "About Us",
        url: "#about"
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<nav${ssrRenderAttrs(mergeProps({ class: "bg-transparent h-16 flex justify-between items-center" }, _attrs))}><img${ssrRenderAttr("src", _imports_0)} alt="" width="65" height="65"><div class="hidden md:flex items-center gap-x-5"><!--[-->`);
      ssrRenderList(unref(navMenu), (item) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: item.url,
          to: item.url,
          "active-class": "text-purple-500",
          class: "text-indigo-500 text-sm font-semibold hover:text-indigo-500 transition-all"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(item.title)}`);
            } else {
              return [
                createTextVNode(toDisplayString(item.title), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div>`);
      _push(ssrRenderComponent(Hamburger, { class: "w-10 md:hidden transition-all" }, null, _parent));
      _push(`</nav>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Navbar.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Navbar = _sfc_main$1;
  _push(`<main${ssrRenderAttrs(mergeProps({ class: "h-screen bg-slate-100 px-4 md:px-14" }, _attrs))} data-v-ae59b4bd>`);
  _push(ssrRenderComponent(_component_Navbar, null, null, _parent));
  _push(`<div class="content px-14" data-v-ae59b4bd>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div></main>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-ae59b4bd"]]);

export { _default as default };
//# sourceMappingURL=default-107b4ffd.mjs.map
