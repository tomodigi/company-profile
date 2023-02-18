<script setup>
</script>
<template>
  <main class="bg-slate-50 w-full">
    <div class="outer-content p-5 md:p-0 md:w-[1400px] mx-auto">
      <Navbar />
      <div class="content w-full md:w-[1280px] mx-auto">
        <slot></slot>
      </div>
      <FooterApp />
    </div>
  </main>
</template>

<style scoped>
.gradient {
  background: linear-gradient(109.6deg, rgb(36, 45, 57) 11.2%, rgb(16, 37, 60) 51.2%, rgb(0, 0, 0) 98.6%);
  /* background: rgb(255,255,255);
  background: linear-gradient(295deg, rgba(255,255,255,1) 0%, rgba(199,223,255,1) 47%, rgba(255,255,255,1) 100%); */
}
</style>
