import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfigOptionsService } from './config-options.service';
import { APP_CONSTANTS, ConstantsModel } from './constants.service';
import { generatorServiceProvider } from './generator.service';
import { LocalStorageService } from './local-storage.service';

const constants: ConstantsModel = {
  App: 'My test shop',
  Ver: 1.0
};

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    ConfigOptionsService,
    { provide: APP_CONSTANTS, useValue: constants },
    generatorServiceProvider,
    { provide: 'TOKEN_LENGTH', useValue: 50 },
    LocalStorageService
  ]
})
export class CoreModule { }
