import * as utils from '../utils'

test('should return remove strikethrough chars', () => {
  expect(utils.removeStrikethroughChars('Rhubarb with fresh thyme, basil, green curry, and chocolate plate for only:' +
    ' 456€ 7̶8̶9̶€̶.'))
    .toEqual('Rhubarb with fresh thyme, basil, green curry, and chocolate plate for only: 456€ .')
})
