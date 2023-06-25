import { shallowMount, flushPromises } from '@vue/test-utils'
import DynamicForm from '@/components/DynamicForm.vue'

describe('dynamic form', () => {
    const emptyResponse = []
    const twoItemResponse = [
        { id: 1, name: 'Kasten Bier Hell', amount: 16 },
        { id: 2, name: 'Flasche Smirnoff Vodka', amount: 6 }
    ]

    beforeEach(() => {
        fetch.resetMocks()
    })

    it('should render the items from the backend', async () => {
        fetch.mockResponseOnce(JSON.stringify(twoItemResponse))

        const item = twoItemResponse[0].name
        const wrapper = shallowMount(DynamicForm)

        await flushPromises()

        expect(wrapper.text()).toContain(item)
    })

    it('should render message when no items received from backend', async () => {
        fetch.mockResponseOnce(JSON.stringify(emptyResponse))

        const msg = 'Noch keine Datensätze vorhanden'
        const wrapper = shallowMount(DynamicForm)

        await flushPromises()

        expect(wrapper.text()).toContain(msg)
    })
})
