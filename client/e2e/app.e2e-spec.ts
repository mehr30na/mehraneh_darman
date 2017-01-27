import { DarmanPage } from './app.po';

describe('darman App', function() {
  let page: DarmanPage;

  beforeEach(() => {
    page = new DarmanPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
