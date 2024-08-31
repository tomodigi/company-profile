<script setup>
import { socialMedia } from '../data/socialMedia';
</script>
<template>
  <div class="relative w-full h-full">
    <img src="/assets/images/gradient.jpg" alt="" class="absolute w-full h-[95%] opacity-25 brightness-50 bg-background-primary/50 rounded-xl">
    <div class="absolute colour-1"></div>
    <div class="absolute colour-2"></div>
    <div class="z-50 flex items-center justify-center w-full h-[90%] backdrop-blur-sm px-16">
      <article class="2xl:mr-28">
        <h1 data-aos="fade-right" class="font-extrabold text-8xl"><span class="text-color-primary">Digital</span> Creative Partner for Innovative <span class="text-color-primary">Solutions</span></h1>
        <p data-aos="fade-up" class="mt-24 text-lg text-slate-50">Tomodigi.id adalah sebuah agensi digital kreatif yang berfokus pada pengembangan solusi digital inovatif untuk membantu brand dan bisnis berkembang di era digital. lebih dari 50+ project yang sudah kami selesaikan dengan pendekatan yang disesuaikan dan inovatif.</p>
      </article>
      <div id="socialMedia" class="flex flex-col items-center justify-center gap-5 mr-5">
        <div class="verticalLine h-[226px] w-[2px] bg-white/55 mb-4"></div>
        <a
          v-for="(social, index) in socialMedia"
          :key="index"
          class="faded flex items-center justify-center p-2 border-2 border-color-primary text-color-primary rounded-full hover:!bg-color-primary hover:text-gray-900 transition-all"
          :href="social.link"
          data-aos="fade-down"
          :data-aos-delay="100 + (index * 100)"
        >
          <Icon :name="social.icon" class="text-3xl" />
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.verticalLine {
  animation: expanding 0.5s forwards;
}
.colour-1 {
  opacity: 0.4;
  box-shadow: 0 0 175px 175px magenta;
  animation: hueRotate 10s 0s linear infinite, colour-1 19s 0s linear infinite;
}
.colour-2 {
  opacity: 0.4;
  box-shadow: 0 0 175px 175px green;
  animation: hueRotate 10s 0s linear infinite, colour-2 19s 0s linear infinite;
}
.colour-3 {
  box-shadow: 10vmax 1vmax 20vmax 10vmax red;
  animation: hueRotate 20s 0s linear infinite, colour-3 15s 0s linear infinite;
}
@keyframes hueRotate {
  to {
    filter: hue-rotate(360deg);
  }
}
@keyframes colour-1 {
  0% {
    top: 25%;
    left: 50%;
  }
  25% {
    left: 15%;
  }
  50% {
    top: 70%;
  }
  75% {
    left: 85%;
  }
  100% {
    top: 30%;
    left: 50%;
  }
}
@keyframes colour-2 {
  0% {
    top: 45%;
    left: 85%;
  }
  25% {
    top: 50%;
  }
  50% {
    left: 20%;
  }
  75% {
    top: 30%;
  }
  100% {
    top: 45%;
    left: 85%;
  }
}
@keyframes colour-3 {
  0% {
    top: 100vh;
    left: 50vw;
  }
  25% {
    left: 100vw;
  }
  50% {
    top: 0vh;
  }
  75% {
    left: 0vw;
  }
  100% {
    top: 100vh;
    left: 50vw;
  }
}

@keyframes expanding {
  from {
    height: 0;
  }
  to {
    height: 226px;
  }
}
@keyframes fade {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>