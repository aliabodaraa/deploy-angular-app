import { ErrorHandler } from '@angular/core';
import { AppError } from './AppError';
export class AppErrorHandler implements ErrorHandler {
  //the steps here will be more complex than the following two rows
  handleError(error: AppError) {
    console.log(error);
    alert('in AppErrorHandler' + error.originalError);
  }
}
