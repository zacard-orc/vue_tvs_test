import { mount, createLocalVue } from '@vue/test-utils';
import VueRouter from 'vue-router';
import App from '@/App';
import HelloWorld from '@/components/HelloWorld';
import Boom from '@/components/Boom';
import routeIns from '@/router';

const localVue = createLocalVue();
localVue.use(VueRouter);

describe('Actions.vue', () => {
  const router = routeIns;
  const wrapper = mount(App, {
    stubs: ['router-link'],
    localVue,
    router });

  it('route path: /, component: Home', async () => {
    router.push('/');
    await wrapper.vm.$nextTick();
    expect(wrapper.findComponent(HelloWorld).exists()).toBe(true);
  });
  it('route path: /boom, component: About', async () => {
    router.push('/boom');
    await wrapper.vm.$nextTick();
    expect(wrapper.findComponent(Boom).exists()).toBe(true);
  });
});
