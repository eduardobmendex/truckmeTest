<script setup>
import { ref, shallowReactive } from "vue";
import {
  VueFlux,
  FluxCaption,
  FluxControls,
  FluxIndex,
  FluxPagination,
  FluxPreloader,
  Img,
  Book,
  Zip,
} from "vue-flux";
import "vue-flux/style.css";

const $vueFlux = ref();

const vfOptions = shallowReactive({
  autoplay: true,
});

const vfRscs = shallowReactive([
  new Img("/src/assets/imgs/img1.png", "Frota."),
  new Img("/src/assets/imgs/img2.png", "Frete."),
  new Img("/src/assets/imgs/img3.png", "Gerenciamento de cargas."),
]);

const vfTransitions = shallowReactive([Book, Zip]);
</script>

<template>
  <div class="p-4 text-center">
    <h1>Galeria</h1>
  </div>
  <main class="w-100 justify-content-center p-5">
    <div class="slider">
      <VueFlux
        :options="vfOptions"
        :rscs="vfRscs"
        :transitions="vfTransitions"
        ref="$vueFlux"
      >
        <template #preloader="preloaderProps">
          <FluxPreloader v-bind="preloaderProps" />
        </template>

        <template #caption="captionProps">
          <FluxCaption v-bind="captionProps" />
        </template>

        <template #controls="controlsProps">
          <FluxControls v-bind="controlsProps" />
        </template>

        <template #pagination="paginationProps">
          <FluxPagination v-bind="paginationProps" />
        </template>

        <template #index="indexProps">
          <FluxIndex v-bind="indexProps" />
        </template>
      </VueFlux>
    </div>
  </main>
</template>

<style setup>
.slider {
  min-width: 70%;
  min-height: 400px;
}
</style>
