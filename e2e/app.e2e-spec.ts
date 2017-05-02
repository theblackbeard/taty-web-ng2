import { TatyWebNg2Page } from './app.po';

describe('taty-web-ng2 App', function() {
  let page: TatyWebNg2Page;

  beforeEach(() => {
    page = new TatyWebNg2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
