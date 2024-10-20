// __tests__/components/TickerItem.test.tsx

import React from 'react';
import {render} from '@testing-library/react-native';
import {TickerType} from '../../src/api/tickers/types';
import TickerItem from '../../src/components/tickerItem/TickerItem';

const mockTicker: TickerType = {
  ticker: 'AAPL',
  name: 'Apple Inc.',
};

describe('TickerItem', () => {
  it('renders TickerItem correctly', () => {
    const {getByText} = render(
      <TickerItem
        ticker={mockTicker}
        onPress={function (ticker: string): void {
          throw new Error('Function not implemented.');
        }}
      />,
    );
    expect(getByText('AAPL')).toBeTruthy();
    expect(getByText('Apple Inc.')).toBeTruthy();
  });
});
