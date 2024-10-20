export interface TickerType {
  ticker: string;
  name: string;
  market?: string;
  locale?: string;
  primaryExchange?: string;
  type?: string;
  active?: boolean;
  currencyName?: string;
  cik?: string;
  compositeFigi?: string;
  shareClassFigi?: string;
  marketCap?: number;
  phoneNumber?: string;
  address?: {
    address1?: string;
    city?: string;
    state?: string;
    postalCode?: string;
  };
  description?: string;
  sicCode?: string;
  sicDescription?: string;
  tickerRoot?: string;
  homepageUrl?: string;
  totalEmployees?: number;
  listDate?: string;
  branding?: {
    logoUrl?: string;
    iconUrl?: string;
  };
  shareClassSharesOutstanding?: number;
  weightedSharesOutstanding?: number;
  roundLot?: number;
}

export interface TickerListResponse {
  status: string;
  count: number;
  requestID: string;
  nextUrl: string;
  results: TickerType[];
}

export interface TickerDetailsResponse {
  requestID: string;
  results: TickerType;
  status: string;
}
