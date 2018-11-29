var helper = require('../index');

test('should return only strikethrough chars', () => {
    expect(helper.getStrikethroughChars('Rhubarb with fresh thyme, basil, green curry, and chocolate plate for only: 456€ (1̶2̶3̶7̶8̶9̶€̶).'))
        .toEqual(["1̶", "2̶", "3̶", "7̶", "8̶", "9̶", "€̶"]);
});

test('should return an ampety array', () => {
    expect(helper.getStrikethroughChars('Combine marshmellow, mackerel and raspberries. soak with smashed butterscotch and serve fluffed with asparagus. Enjoy!'))
        .toEqual([]);
});
