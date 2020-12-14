import { mount } from '@vue/test-utils';
import HelloWorld from '@/components/HelloWorld';


const wait = tmout => new Promise((resolve) => {
  setTimeout(() => {
    resolve();
  }, tmout);
});


describe('HelloWorld.vue', () => {
  const wrapper = mount(HelloWorld);

  it('render hello', async () => {
    await wait(1000);
    expect(wrapper.find('.hello h1').text())
      .toEqual('Welcome lly');
  });
});
