<script setup>
</script>
<template>
  <main class="h-screen bg-slate-900 bg-repeat px-4 md:px-14 gradient">
    <Navbar />
    <slot></slot>
  </main>
</template>

<style scoped>
.gradient {
  background: linear-gradient(109.6deg, rgb(36, 45, 57) 11.2%, rgb(16, 37, 60) 51.2%, rgb(0, 0, 0) 98.6%);
}
</style>
