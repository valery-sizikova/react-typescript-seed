import { MainService } from './main.service';

describe('Main service', () => {
  it('gets the page title', () => {
    const mainService = new MainService();
    expect(mainService.getPageTitle()).toMatch(/Main page/)
  })
})