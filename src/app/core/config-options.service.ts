import { Injectable, SystemJsNgModuleLoaderConfig } from '@angular/core';
import { ConfigOptionsModel } from './config-options.model';


@Injectable()

export class ConfigOptionsService {
  config: ConfigOptionsModel;

  set setConfigData(data: ConfigOptionsModel) {
    this.config = data;
  }

  get getConfigData(): ConfigOptionsModel {
    return this.config;
  }
}
