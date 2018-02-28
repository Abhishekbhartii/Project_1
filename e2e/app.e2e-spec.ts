import { IngAtmLocatorPage } from './app.po';

describe('ing-atm-locator App', function() {
  let page: IngAtmLocatorPage;

  beforeEach(() => {
    page = new IngAtmLocatorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
