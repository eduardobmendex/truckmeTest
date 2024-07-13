<script setup>
const servicos = [
  {
    serviceName: "Transporte de cargas",
    servicePrice: "R$ 1510,00",
    serviceDescription:
      "Serviço de transporte para cargas diversas, garantindo segurança e agilidade na entrega.",
  },
  {
    serviceName: "Operação de Transporte",
    servicePrice: "R$ 2040,00",
    serviceDescription:
      "Gerenciamento completo de operações de transporte, desde a coleta até a entrega final.",
  },
  {
    serviceName: "Frete",
    servicePrice: "R$ 1280,00",
    serviceDescription:
      "Serviço de frete para pequenas e grandes cargas, com opções de entrega expressa.",
  },
];
</script>
<template>
  <div class="p-4 text-center" id="sectionService">
    <h1>Serviços</h1>
  </div>
  <div class="rounded" style="height: 500px">
    <div class="table">
      <div class="table-header">
        <div class="table-row">
          <div class="table-cell">id</div>
          <div class="table-cell">Nome</div>
          <div class="table-cell">Descrição</div>
          <div class="table-cell">Preço</div>
        </div>
      </div>
      <div class="table-body">
        <div
          v-for="(servico, index) in servicos"
          :key="index"
          class="table-row"
        >
          <div class="table-cell">{{ index + 1 }}</div>
          <div class="table-cell">{{ servico.serviceName }}</div>
          <div class="table-cell">{{ servico.serviceDescription }}</div>
          <div class="table-cell">{{ servico.servicePrice }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.table {
  display: table;
  width: 100%;
}

.table-header,
.table-body {
  display: table-header-group; 
}

.table-row {
  display: table-row;
}

.table-cell {
  display: table-cell;
  padding: 10px;
  border: 0.5px solid #000000;  
  border-radius: 2px;
  font-family: courier;
}
</style>
