import { enableFetchMocks , fetchMock } from 'jest-fetch-mock'
import { shallowMount, flushPromises } from '@vue/test-utils'
import DynamicForm from '@/components/DynamicForm.vue';

global.fetch = fetchMock;
global.jest = jest;
enableFetchMocks()

describe('Testing DynamivForm.vue', () => {

  const emptyResponse = []
  const twoObjectResponse = [
    { id: 1, name: 'Kasten Bier Hell', amount: 16 },
    { id: 2, name: 'Flasche Smirnoff Vodka', amount: 6 },
  ]

  beforeEach(() => {
    fetchMock.resetMocks()
  })

  it('should render the objects from the backend', async () => {
    fetchMock.mockResponseOnce(JSON.stringify(twoObjectResponse))

    const object = twoObjectResponse[0].name
    const wrapper = shallowMount(DynamicForm)

    await flushPromises()

    expect(wrapper.text()).toContain(object)
  })

  it('should render message when no objects received from backend', async () => {
    fetchMock.mockResponseOnce(JSON.stringify(emptyResponse))

    const msg = 'Noch keine Datensätze vorhanden.'
    const wrapper = shallowMount(DynamicForm)

    await flushPromises()

    expect(wrapper.text()).toContain(msg)
  })
})
