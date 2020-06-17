import * as utils from '../utils'

test('should return remove strikethrough chars', () => {
  expect(utils.getString('Rhubarb with fresh thyme, basil, green curry, and chocolate plate for only: 456€ 7̶8̶9̶€̶.'))
    .toEqual('789€')
})
