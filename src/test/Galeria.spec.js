import { mount } from '@vue/test-utils';
import Galeria from '../components/GalleryComponent.vue';  
import { VueFlux } from 'vue-flux'; 

describe('Galeria.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(Galeria);
  });

  it('deve renderizar corretamente o título', () => {
    expect(wrapper.find('h1').text()).toBe('Galeria');
  });

  it('deve conter o componente VueFlux', () => {
    const vueFluxComponent = wrapper.findComponent(VueFlux);
    expect(vueFluxComponent.exists()).toBe(true);
  });

  it('deve ter a opção autoplay ativada', () => {
    const vueFluxComponent = wrapper.findComponent(VueFlux);
    expect(vueFluxComponent.props().options.autoplay).toBe(true);
  });

  it('deve conter as imagens na galeria', () => {
    const vueFluxComponent = wrapper.findComponent(VueFlux);
    expect(vueFluxComponent.props().rscs.length).toBe(3);
  });
});
