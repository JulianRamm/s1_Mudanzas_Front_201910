import { ViajeModule } from './viaje.module';

describe('ViajeModule', () => {
  let viajeModule: ViajeModule;

  beforeEach(() => {
    viajeModule = new ViajeModule();
  });

  it('should create an instance', () => {
    expect(viajeModule).toBeTruthy();
  });
});
