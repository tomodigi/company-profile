import { a as useNuxtApp } from './server.mjs';
import { useSeoMeta } from '@unhead/vue';

function useHead(input, options) {
  return useNuxtApp()._useHead(input, options);
}
const useServerSeoMeta = (meta) => {
  {
    return useSeoMeta(meta);
  }
};

export { useHead as a, useServerSeoMeta as u };
//# sourceMappingURL=composables-9efc9597.mjs.map
