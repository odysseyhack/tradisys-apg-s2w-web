import { shallowMount } from '@vue/test-utils'
import Register from '@/views/Register.vue'

describe('Register.vue', () => {
  it('renders when register mounted', () => {
    const wrapper = shallowMount(Register, {})
    expect(wrapper.isVueInstance()).toBe(true)
  })
})
