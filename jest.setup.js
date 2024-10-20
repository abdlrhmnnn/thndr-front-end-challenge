jest.mock(
  './src/components/tickerItem/TickerItem',
  () => require('./__mocks__/TickerItem').default,
);

jest.mock('@react-navigation/native', () => {
  return {
    ...jest.requireActual('@react-navigation/native'),
    useRoute: jest.fn(),
    useFocusEffect: jest.fn(() => ({})), // Mock useFocusEffect here
    useNavigation: jest.fn(), // Mock useNavigation here
  };
});
jest.mock('react-redux', () => ({
  connect: () => jest.fn(),
  useSelector: jest.fn(fn => fn()),
  useDispatch: () => jest.fn(),
}));
jest.mock('./src/api/tickers/api', () => ({
  useGetTickersListQuery: jest.fn(),
}));
