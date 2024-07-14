<script setup>
import { ref } from "vue";

const texto1 = `
 
     Através da nossa Plataforma Web, garantimos serviço com todos os
          requisitos e obrigações da transportadora tradicional. Conectamos
          vocês Embarcadores aos mais qualificados transportadores autônomos,
          através de um criterioso processo de gestão e simplificação de
          processos do frete!
          Conectamos vocês Embarcadores aos mais qualificados transportadores
          autônomos, através de um criterioso processo de gestão e simplificação
          de processos do frete!
       
`;
const texto2 = `Cuidamos da burocracia e lhe ajudamos a encontrar as melhores
                ofertas de cargas, permitindo-lhes o poder da negociação do
                frete, direto com o Embarcador.
                Seja nosso parceiro,
                aproveite as ofertas de fretes e faça parte da mudança.`;

const truncatedText = texto1.slice(0, 250) + "...";
const truncatedText2 = texto1.slice(0, 100) + "...";
const isExpanded = ref(false);
const isExpanded2 = ref(false);

function toggleText() {
  isExpanded.value = !isExpanded.value;
}
function toggleText2() {
  isExpanded2.value = !isExpanded2.value;
}
</script>

<template>
  <div class="container marketing mt-4" id="sobreSection">
    <br /><br />
    <hr class="featurette-divider" />
    <div class="p-4 text-center">
      <h1>Sobre Nós</h1>
    </div>
    <div class="row featurette">
      <div class="col-md-7 p-5">
        <h2 class="featurette-heading fw-normal lh-1">
          Embarcadores,
          <span class="text-body-secondary"> Nós fazemos frete! </span>
        </h2>

        <p>{{ isExpanded ? texto1 : truncatedText }}</p>
        <button type="button" class="btn btn-danger" @click="toggleText">
          {{ isExpanded ? "Recolher." : "Leia mais." }}
        </button>
      </div>
      <div class="col-md-5">
        <img
          class="rounded"
          width="100%"
          src="../assets/imgs/bannerFrete.png"
          alt=""
          srcset=""
        />
      </div>
    </div>

    <hr class="featurette-divider" />

    <div class="row featurette">
      <div class="col-md-7 order-md-2 p-5">
        <div class="elementor-widget-wrap elementor-element-populated">
          <div
            class="elementor-element elementor-element-7163c401 elementor-widget elementor-widget-heading animated fadeInLeft"
            data-id="7163c401"
            data-element_type="widget"
            data-settings='{"_animation":"fadeInLeft"}'
            data-widget_type="heading.default"
          >
            <div class="elementor-widget-container">
              <h2 class="elementor-heading-title elementor-size-default">
                Transportadores
              </h2>
            </div>
          </div>
          <div
            class="elementor-element elementor-element-5a2cae7f elementor-widget elementor-widget-heading animated fadeInLeft"
            data-id="5a2cae7f"
            data-element_type="widget"
            data-settings='{"_animation":"fadeInLeft"}'
            data-widget_type="heading.default"
          >
            <div class="elementor-widget-container">
              <h2
                class="elementor-heading-title elementor-size-default text-body-secondary"
              >
                Cargas Lotação
              </h2>
            </div>
          </div>
          <div
            class="elementor-element elementor-element-561c9412 elementor-widget elementor-widget-text-editor animated fadeInLeft"
            data-id="561c9412"
            data-element_type="widget"
            data-settings='{"_animation":"fadeInLeft"}'
            data-widget_type="text-editor.default"
          >
            <div class="elementor-widget-container">
              <p>
                Através do nosso <b>Aplicativo para </b><b>transportadores</b>,
                divulgamos as melhores ofertas de cargas, sem intermediação,
                comissionamento ou taxas.
              </p>
            </div>
          </div>
          <div
            class="elementor-element elementor-element-efbb8c0 elementor-widget elementor-widget-text-editor animated fadeInLeft"
            data-id="efbb8c0"
            data-element_type="widget"
            data-settings='{"_animation":"fadeInLeft"}'
            data-widget_type="text-editor.default"
          >
            <div class="elementor-widget-container">
              <p>{{ isExpanded2 ? texto2 : truncatedText2 }}</p>
              <button type="button" class="btn btn-danger" @click="toggleText2">
                {{ isExpanded2 ? "Recolher." : "Leia mais." }}
              </button>
            </div>
          </div>
          <div
            class="elementor-element elementor-element-769258e9 elementor-align-left elementor-mobile-align-center elementor-widget elementor-widget-button animated fadeInUp"
            data-id="769258e9"
            data-element_type="widget"
            data-settings='{"_animation":"fadeInUp"}'
            data-widget_type="button.default"
          >
            <div class="elementor-widget-container">
              <div class="elementor-button-wrapper">
                <a
                  class="elementor-button elementor-button-link elementor-size-lg"
                  href="https://play.google.com/store/apps/details?id=br.com.truckme.app"
                  target="_blank"
                >
                  <span class="elementor-button-content-wrapper"> </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-5 order-md-1">
        <img
          class="rounded"
          width="100%"
          src="../assets/imgs/bannerCarga.png"
          alt=""
          srcset=""
        />
      </div>
    </div>

    <hr class="featurette-divider" />

    <div class="row featurette"></div>
  </div>
</template>

<style scoped>
button {
  margin-top: 10px;
  padding: 5px 10px;
  cursor: pointer;
}
</style>
