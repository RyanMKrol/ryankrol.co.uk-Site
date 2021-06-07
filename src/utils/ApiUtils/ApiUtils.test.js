import baseEndpoint from './ApiUtils';

it('returns prod endpoint in non-dev mode', () => {
  const apiEndpoint = baseEndpoint();

  expect(apiEndpoint).toBe('http://www.ryankrol.co.uk/api');
});

it('returns dev endpoint in dev mode', () => {
  process.env.REACT_APP_LOCAL_API = 1;

  const apiEndpoint = baseEndpoint();

  expect(apiEndpoint).toBe('http://localhost:8000/api');
});
