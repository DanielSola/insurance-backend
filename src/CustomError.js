class CustomError extends Error {
  constructor(objectError) {
    super();
    this.httpCode = objectError.httpCode;
    this.errorMessage = objectError.message;
    this.message = `Code ${this.httpCode}: ${this.errorMessage}`;
  }
}

export default CustomError;