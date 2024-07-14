import { mount } from '@vue/test-utils';
import Contato from '../components/ContactFormComponent.vue';

describe('Contato.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(Contato);
  });

  it('deve renderizar corretamente', () => {
    expect(wrapper.find('h1').text()).toBe('Contato');
  });

  it('deve mostrar erros quando os campos estão vazios', async () => {
    await wrapper.find('form').trigger('submit.prevent');

    expect(wrapper.vm.errors.nome).toBe('O nome deve conter apenas letras e espaços.');
    expect(wrapper.vm.errors.email).toBe('O email deve conter letras, números, pontos e caracteres especiais.');
    expect(wrapper.vm.errors.telefone).toBe('Corrija o número de celular para o formato: (XX) XXXXX-XXXX');
    expect(wrapper.vm.errors.mensagem).toBe('A mensagem deve ter pelo menos 10 caracteres.');
  });

  it('deve aceitar entradas válidas e enviar o formulário', async () => {
    await wrapper.setData({
      form: {
        nome: 'João Silva',
        email: 'joao.silva@example.com',
        telefone: '(11) 98765-4321',
        mensagem: 'Olá, esta é uma mensagem de teste.'
      }
    });

    await wrapper.find('form').trigger('submit.prevent');

    expect(wrapper.vm.errors).toEqual({}); 
  });
});
