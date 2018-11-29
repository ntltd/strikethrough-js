var helper = require('../index');

test('should return remove strikethrough chars', () => {
    expect(helper.getRemoveStrikethroughChars('Rhubarb with fresh thyme, basil, green curry, and chocolate plate for only: 456€ 7̶8̶9̶€̶.'))
        .toEqual(["7", "8", "9", "€"]);
});
