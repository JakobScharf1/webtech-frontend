import { mount } from '@vue/test-utils'
import HomeView from '@/views/HomeView.vue';
import DynamicForm from '@/components/DynamicForm.vue';

describe('Testing Home.vue', () => {

  it('Should show page title', () => {
    const wrapper = mount(HomeView)

    expect(wrapper.text()).toMatch('Noch keine Datensätze vorhanden.')
  })

  it('Should have dynamic form component', () => {
    const wrapper = mount(HomeView)
    const dynamicForm = wrapper.findComponent(DynamicForm)

    expect(dynamicForm.exists()).toBeTruthy()
  })
})
