import clock from '../clock'

test('checks what happens with invalid inputs', () => {
  expect(clock(undefined)).toBe(undefined)
  expect(() => clock(-1)).toThrow()
  expect(clock(3, 3)).toMatch('03s')
  expect(clock('random')).toMatch('random')
})

test('checks for correct outputs for the clock function', () => {
  expect(clock(10)).toMatch('10s')
  expect(clock(3)).toMatch('03s')
  expect(clock(70)).toMatch('1:10')
  expect(clock(1000)).toMatch('16:40')
  expect(clock(1000)).toMatch('16:40')
})
