<script setup lang="ts">
const clients = [
  {
    name: "Couple Project",
    img: "/client/couple-project.webp",
  },
  {
    name: "Fadsan",
    img: "/client/fadsan.webp",
  },
  {
    name: "Kohesif Studio",
    img: "/client/kohesif-studio.webp",
  },
  {
    name: "Masfree Studio",
    img: "/client/masfree-studio.webp",
  },
  {
    name: "RJU",
    img: "/client/rju.webp",
  },
  {
    name: "WLS",
    img: "/client/wls.webp",
  },
  {
    name: "Goresan Studio",
    img: "/client/goresan-studio.webp",
  },
];

const initAnimation = () => {
  const scrollContainer = document.querySelector('.containerScroll') as HTMLElement;

  // add data-animated="true" to every `.scroller` on the page
  scrollContainer.setAttribute("data-animated", 'true');

  // Make an array from the elements within `.scroller-inner`
  const scrollerInner = scrollContainer.querySelector(".imgWrapper") as HTMLElement;
  const scrollerContent = Array.from(scrollerInner.children);

  // For each item in the array, clone it
  // add aria-hidden to it
  // add it into the `.scroller-inner`
  scrollerContent.forEach((item) => {
    const duplicatedItem = item.cloneNode(true) as HTMLElement;
    duplicatedItem.setAttribute("aria-hidden", 'true');
    scrollerInner.appendChild(duplicatedItem);
  });

}

onMounted(() => {
  initAnimation();
})
</script>
<template>
  <div>
    <div class="max-w-4xl mx-auto">
      <img
        src="/logo-white.webp"
        alt="Logo White"
        width="50"
        height="50"
        class="mx-auto"
        data-aos="fade-up"
        data-aos-duration="1000"
      />
      <h2
        class="mt-5 mb-10 text-center section--title shrink-0"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <slot name="title"></slot>
      </h2>
    </div>
    <hr
      class="mb-16 border border-gray-500"
      data-aos="fade-up"
      data-aos-duration="1000"
    />
    <div
      class="grid grid-cols-7 gap-5"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div
        class="flex items-center justify-center containerScroll w-[1270px]"
        style="--time:25s"
      >
        <div class="flex items-center gap-5 text-gray-400 imgWrapper">
          <img v-for="(client, index) in clients" :key="index" :src="client.img" :alt="client.name" />
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
/* .containerScroll {
  -webkit-mask-image: linear-gradient(90deg, transparent, #fff 20%, #fff 80%, transparent)
} */
.containerScroll[data-animated="true"] {
  overflow: hidden;
  -webkit-mask: linear-gradient(
    90deg,
    transparent,
    white 20%,
    white 80%,
    transparent
  );
  mask: linear-gradient(90deg, transparent, white 20%, white 80%, transparent);
}
.containerScroll[data-animated="true"] .imgWrapper {
  width: max-content;
  flex-wrap: nowrap;
  animation: scroll var(--_animation-duration, 40s)
    var(--_animation-direction, forwards) linear infinite;
}
.scroller[data-direction="left"] {
  --_animation-direction: forwards;
}
.scroller[data-speed="fast"] {
  --_animation-duration: 20s;
}
@keyframes scroll {
  to {
    transform: translate(calc(-50% - 0.5rem));
  }
}
</style>
