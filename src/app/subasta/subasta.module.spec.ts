import { SubastaModule } from './subasta.module';

describe('SubastaModule', () => {
  let subastaModule: SubastaModule;

  beforeEach(() => {
    subastaModule = new SubastaModule();
  });

  it('should create an instance', () => {
    expect(subastaModule).toBeTruthy();
  });
});
