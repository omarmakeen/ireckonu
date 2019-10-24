import { TelephoneCodePipe } from './telephone-code.pipe';

describe('TelephoneCodePipe', () => {
  it('create an instance', () => {
    const pipe = new TelephoneCodePipe();
    expect(pipe).toBeTruthy();
  });
});
