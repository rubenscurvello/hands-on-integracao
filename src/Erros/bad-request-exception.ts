export class BadRequestException extends Error {
    constructor(Errors: any) {
      super();
      this.name = 'BadRequestExceptions';
      this.message = JSON.stringify(Errors);
    }
  }