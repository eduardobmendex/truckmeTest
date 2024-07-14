<template>
  <section class="bg-dark text-light mt-5" id="sectionContato">
    <div class="p-4 text-center">
      <h1>Contato</h1>
    </div>
    <section class="w-100 d-flex justify-content-center bg-dark p-5">
      <section class="column w-75">
        <form @submit.prevent="submitForm">
          <div class="input-group mb-3">
            <span class="input-group-text">Nome</span>
            <input
              type="text"
              v-model="form.nome"
              class="form-control"
              placeholder="Nome"
              aria-label="Nome"
            />
          </div>
          <div v-if="errors.nome" class="text-danger d-flex">
            <p>{{ errors.nome }}</p>
          </div>

          <div class="input-group mb-3">
            <span class="input-group-text">Email</span>
            <input
              type="email"
              v-model="form.email"
              class="form-control"
              placeholder="Email"
              aria-label="Email"
            />
          </div>
          <div v-if="errors.email" class="text-danger">{{ errors.email }}</div>

          <div class="input-group mb-3">
            <span class="input-group-text">Telefone</span>
            <input
              type="tel"
              v-model="form.telefone"
              class="form-control"
              placeholder="Telefone"
              aria-label="Telefone"
            />
          </div>
          <div v-if="errors.telefone" class="text-danger">
            {{ errors.telefone }}
          </div>

          <div class="mb-3">
            <label for="mensagem" class="form-label">Mensagem</label>
            <textarea
              v-model="form.mensagem"
              class="form-control"
              id="mensagem"
              rows="3"
              placeholder="Sua mensagem"
            ></textarea>
          </div>
          <div v-if="errors.mensagem" class="text-danger">
            {{ errors.mensagem }}
          </div>

          <button type="submit" class="btn btn-primary">Enviar</button>
        </form>
      </section>
    </section>
  </section>
</template>

<script setup>
import { ref } from "vue";

const regexName = /^[A-Za-zÀ-ÿ]+(?:\s[A-Za-zÀ-ÿ]+)*$/; 
const regexCelular = /^\((\d{2})\)\s(\d{5})-(\d{4})$/; 

const form = ref({
  nome: "",
  email: "",
  telefone: "",
  mensagem: "",
});

const errors = ref({});

function validateForm() {
  errors.value = {};  

   if (!regexName.test(form.value.nome)) {
    errors.value.nome = "O nome deve conter apenas letras e espaços.";
  }

   if (
    !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(form.value.email)
  ) {
    errors.value.email =
      "O email deve conter letras, números, pontos e caracteres especiais.";
  }

   if (form.value.mensagem.length < 10) {
    errors.value.mensagem = "A mensagem deve ter pelo menos 10 caracteres.";
  }

   if (!regexCelular.test(form.value.telefone)) {
    errors.value.telefone =
      "Corrija o número de celular para o formato: (XX) XXXXX-XXXX";
  }

  return Object.keys(errors.value).length === 0;
}

function submitForm() {
  if (validateForm()) {
    console.log("Formulário enviado:", form.value);
    alert("Formulário enviado!");
  } else {
    alert("Por favor, corrija os erros no formulário.");
  }
}
</script>

<style scoped>
.text-danger {
  font-size: 0.9rem;
}
</style>
