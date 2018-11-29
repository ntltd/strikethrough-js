var helper = require('../index');

test('should return remove strikethrough', () => {
    expect(helper.removeStrikethrough('Rhubarb with fresh thyme, basil, green curry, and chocolate plate for only: 456€ (7̶8̶9̶€̶).'))
        .toEqual('Rhubarb with fresh thyme, basil, green curry, and chocolate plate for only: 456€ (789€).');
});
