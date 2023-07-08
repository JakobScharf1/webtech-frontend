import { mount } from '@vue/test-utils'
import DynamicForm from '@/components/DynamicForm.vue';

describe('Testing DynamivForm.vue', () => {

  it('Should have dynamic form component search', () => {
    const wrapper = mount(DynamicForm);

    const dynamicForm = wrapper.find('.search');
    expect(dynamicForm.exists()).toBe(true);
  })

  it('Should have dynamic form component tableBorder', () => {
    const wrapper = mount(DynamicForm);

    const dynamicForm = wrapper.find('.tableBorder');
    expect(dynamicForm.text()).toBe('NameAnzahl');
  })

  it('Should not have any components', () => {
    const wrapper = mount(DynamicForm);

    const inventoryObjects = wrapper.findAllComponents(DynamicForm)
    expect(inventoryObjects.length).toBe(0)
  })
})