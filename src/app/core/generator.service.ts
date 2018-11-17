import { Injectable, Provider } from '@angular/core';

@Injectable()
export class GeneratorService {

  constructor(
    private n: number
  ) { }

  getToken() {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < this.n; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
  }
}

export const generatorServiceFactory = (n: number) => {
  return new GeneratorService(n);
};

export const generatorServiceProvider = { provide: GeneratorService, useFactory: generatorServiceFactory, deps: ['TOKEN_LENGTH'] };
