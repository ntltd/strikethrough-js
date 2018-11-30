var helper = require('../index');

test('should return only strikethrough chars', () => {
    expect(helper.getStrikethroughString('Rhubarb with fresh thyme, basil, green curry, and chocolate plate for only: 456€ (1̶2̶3̶7̶8̶9̶€̶).'))
        .toEqual('1̶2̶3̶7̶8̶9̶€̶');
});

test('should return an ampety array', () => {
    expect(helper.getStrikethroughString('Combine marshmellow, mackerel and raspberries. soak with smashed butterscotch and serve fluffed with asparagus. Enjoy!'))
        .toEqual('');
});
