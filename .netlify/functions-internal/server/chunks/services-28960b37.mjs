import { u as useRoute } from './server.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { u as useServerSeoMeta } from './composables-9efc9597.mjs';
import { ssrRenderAttrs } from 'vue/server-renderer';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'ufo';
import 'h3';
import '@unhead/vue';
import '@unhead/dom';
import '@unhead/ssr';
import 'vue-router';
import 'defu';
import './config.mjs';
import 'destr';
import 'scule';

const _sfc_main = {
  __name: "services",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    useServerSeoMeta({
      title: "Tomo Digital Service",
      ogTitle: "Tomo Services",
      ogImage: "~/assets/images/tomo_2.png",
      ogDescription: "Pilih Paketmu",
      ogSiteName: "TomoDigi",
      ogUrl: route.fullPath
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<h1${ssrRenderAttrs(mergeProps({ class: "text-4xl" }, _attrs))}>SERVICE PAGES</h1>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/services.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=services-28960b37.mjs.map
