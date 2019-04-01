import { TarjetaModule } from './tarjeta.module';

describe('TarjetaModule', () => {
  let tarjetaModule: TarjetaModule;

  beforeEach(() => {
    tarjetaModule = new TarjetaModule();
  });

  it('should create an instance', () => {
    expect(tarjetaModule).toBeTruthy();
  });
});
