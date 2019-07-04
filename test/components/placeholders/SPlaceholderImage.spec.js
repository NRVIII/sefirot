import { mount } from '@vue/test-utils'
import SPlaceholderImage from '@/components/placeholders/SPlaceholderImage'

jest.useFakeTimers()

describe('Components - Placeholders - SPlaceholderImage', () => {
  test('it emits `load` event when image is loaded', async () => {
    const wrapper = mount(SPlaceholderImage, {
      propsData: {
        img: 'example.jpg',
        width: 100,
        height: 100
      }
    })

    wrapper.find('.SPlaceholderImage .img-src').trigger('load')

    jest.runAllTimers()

    expect(wrapper.emitted('load').length).toBe(1)
  })
})
