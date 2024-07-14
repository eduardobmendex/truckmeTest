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
  new Img("https://img.freepik.com/fotos-gratis/muitos-caminhoes-de-transporte-estacionados-em-uma-estacao-de-servico-ao-por-do-sol-ai-generative_123827-23416.jpg", "Frota."),
  new Img("https://img.freepik.com/fotos-gratis/logistica-e-transporte-de-navio-de-carga-de-conteineres-e-aviao-de-carga-com-ponte-de-guindaste-de-trabalho-no-estaleiro-ao-nascer-do-sol-importacao-exportacao-logistica-e-fundo-da-industria-de-transporte-ai-generative_123827-24177.jpg?size=626&ext=jpg&ga=GA1.1.1700460183.1710115200&semt=ais", "Frete."),
  new Img("https://img.freepik.com/fotos-premium/carga-de-fundo-em-navios-de-carga-de-conteineres-para-negocios-de-importacao-e-exportacao_410516-14768.jpg?w=740", "Gerenciamento de cargas."),
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
