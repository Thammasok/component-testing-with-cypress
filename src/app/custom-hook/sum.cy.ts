import { increment } from './sum'

describe('Sum function', () => {
  it('อยากเห็น 11 จากการส่งเลข 10', () => {
    const input = 10
    let count = 0
    // mock
    const setCount = (v: number) => {
      count = v
    }

    increment(input, setCount)

    expect(count).equal(11)
  })

  it('อยากเห็น count = 0 (เริ่มต้น) จากการส่งเลข 101', () => {
    const input = 101
    let count = 0
    // mock
    const setCount = (v: number) => {
      count = v
    }

    increment(input, setCount)

    expect(count).equal(0)
  })
})
