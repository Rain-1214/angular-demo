import { AppPage } from './app.po';
import { element, by } from '../node_modules/_protractor@5.1.2@protractor';

describe('my-angular-app App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
