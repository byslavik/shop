import { InjectionToken } from '@angular/core';
export interface ConstantsModel {
  App: string;
  Ver: number;
}
export const APP_CONSTANTS = new InjectionToken<ConstantsModel>('constants.service');
