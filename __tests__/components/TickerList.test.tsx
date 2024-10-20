import React from 'react';
import {render} from '@testing-library/react-native';
import TickerList from '../../src/components/tickerList/TickerList';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {TickerType} from '../../src/api/tickers/types';

const mockTickerList: TickerType[] = [
  {ticker: 'AAPL', name: 'Apple Inc.'},
  {ticker: 'GOOGL', name: 'Alphabet Inc.'},
  {ticker: 'AMZN', name: 'Amazon.com Inc.'},
];

// jest.mock(
//   '../../src/components/tickerItem/TickerItem',
//   () => require('../../__mocks__/TickerItem').default,
// );

describe('TickerList', () => {
  it('renders correctly with a list of tickers', () => {
    const {getAllByTestId} = render(<TickerList tickerList={mockTickerList} />);

    const tickerItems = getAllByTestId('ticker-item');
    expect(tickerItems.length).toBe(mockTickerList.length);

    const tickerSymbols = getAllByTestId('ticker-symbol');
    const tickerNames = getAllByTestId('ticker-name');

    tickerSymbols.forEach((symbol, index) => {
      expect(symbol.props.children).toBe(mockTickerList[index].ticker);
    });

    tickerNames.forEach((name, index) => {
      expect(name.props.children).toBe(mockTickerList[index].name);
    });
  });

  it('renders the correct number of TickerItem components', () => {
    const {getAllByTestId} = render(<TickerList tickerList={mockTickerList} />);

    const tickerItems = getAllByTestId('ticker-item');
    expect(tickerItems.length).toBe(mockTickerList.length);
  });
});
