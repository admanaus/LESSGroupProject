import { LESSGroupProjectPage } from './app.po';

describe('lessgroup-project App', () => {
  let page: LESSGroupProjectPage;

  beforeEach(() => {
    page = new LESSGroupProjectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
