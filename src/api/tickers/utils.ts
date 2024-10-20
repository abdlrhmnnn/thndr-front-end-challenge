import {TickerDetailsResponse, TickerListResponse, TickerType} from './types';

export const API_Key = 'AQtoCirgSgdxGvv4hi5pr29w0aF5PC0m';
export const mapTickerDataResponseToTickerType = (
  response: any,
): TickerType => {
  return {
    ticker: response?.ticker ?? undefined,
    name: response?.name ?? undefined,
    market: response?.market ?? undefined,
    locale: response?.locale ?? undefined,
    primaryExchange: response?.primary_exchange ?? undefined,
    type: response?.type ?? undefined,
    active: response?.active ?? undefined,
    currencyName: response?.currency_name ?? undefined,
    cik: response?.cik ?? undefined,
    compositeFigi: response?.composite_figi ?? undefined,
    shareClassFigi: response?.share_class_figi ?? undefined,
    marketCap: response?.market_cap ?? undefined,
    phoneNumber: response?.phone_number ?? undefined,
    address: {
      address1: response?.address?.address1 ?? undefined,
      city: response?.address?.city ?? undefined,
      state: response?.address?.state ?? undefined,
      postalCode: response?.address?.postal_code ?? undefined,
    },
    description: response?.description ?? undefined,
    sicCode: response?.sic_code ?? undefined,
    sicDescription: response?.sic_description ?? undefined,
    tickerRoot: response?.ticker_root ?? undefined,
    homepageUrl: response?.homepage_url ?? undefined,
    totalEmployees: response?.total_employees ?? undefined,
    listDate: response?.list_date ?? undefined,
    branding: {
      logoUrl: response?.branding?.logo_url ?? undefined,
      iconUrl: response?.branding?.icon_url ?? undefined,
    },
    shareClassSharesOutstanding:
      response?.share_class_shares_outstanding ?? undefined,
    weightedSharesOutstanding:
      response?.weighted_shares_outstanding ?? undefined,
    roundLot: response?.round_lot ?? undefined,
  };
};

export const mapTickerListResponseToTickerListResponse = (
  response: any,
): TickerListResponse => {
  return {
    status: response.status,
    count: response.count,
    requestID: response.request_id,
    nextUrl: response.next_url,
    results: response.results.map((result: any) =>
      mapTickerDataResponseToTickerType(result),
    ),
  };
};

export const mapTickerDetailsResponseToTickerType = (
  response: any,
): TickerDetailsResponse => {
  return {
    requestID: response.request_id,
    results: mapTickerDataResponseToTickerType(response.results),
    status: response.status,
  };
};
