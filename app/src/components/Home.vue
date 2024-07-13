<script setup>
import { ref } from "vue";
import HeaderComponent from "./HeaderComponent.vue";
import BannerComponent from "./BannerComponent.vue";
import AboutComponent from "./AboutComponent.vue";
import ServicesTableComponent from "./ServicesTableComponent.vue";
import ContactFormComponent from "./ContactFormComponent.vue";
import GalleryComponent from "./GalleryComponent.vue";
</script>

<template>
  <main>
    <HeaderComponent></HeaderComponent>
    <BannerComponent></BannerComponent>
    <AboutComponent></AboutComponent>
    <ServicesTableComponent></ServicesTableComponent>
    <ContactFormComponent></ContactFormComponent>
    <GalleryComponent></GalleryComponent>
  </main>
</template>
