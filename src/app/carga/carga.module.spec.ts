import { CargaModule } from './carga.module';

describe('CargaModule', () => {
  let cargaModule: CargaModule;

  beforeEach(() => {
    cargaModule = new CargaModule();
  });

  it('should create an instance', () => {
    expect(cargaModule).toBeTruthy();
  });
});
