import { b as buildAssetsURL } from './paths.mjs';
import { useSSRContext, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';
import { u as useRoute } from './server.mjs';
import { u as useServerSeoMeta } from './composables-9efc9597.mjs';
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

const _imports_0 = "" + buildAssetsURL("undraw_teaching.3272113f.svg");
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full flex justify-between items-center" }, _attrs))}><div><h1 class="text-2xl md:text-6xl font-tomo-main font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">TOMO</h1><h2 class="text-lg md:text-4xl font-tomo-main font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">Digital Creative</h2><p class="max-w-md text-justify text-neutral-700"><span class="font-medium font-tomo-main leading-relaxed text-neutral-800">TOMO</span> merupakan konsultan sekaligus penyedia layanan Jasa Digital Marketing untuk berbagai tahapan bisnis, hasil kolaborasi dari berbagai Agency &amp; Profesional terbaik di Indonesia! </p></div><img${ssrRenderAttr("src", _imports_0)} alt="" class="mt-16"></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Jumbotron.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    useServerSeoMeta({
      title: "Tomo Digital Creative",
      ogTitle: "Tomo Digital Creative",
      ogImage: "~/assets/images/tomo_2.png",
      ogDescription: "Digital Creative",
      ogSiteName: "TomoDigi",
      ogUrl: route.fullPath
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Jumbotron = __nuxt_component_0;
      _push(`<main${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_Jumbotron, null, null, _parent));
      _push(`</main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-a3270a54.mjs.map
