class AppError {
  public readonly message: string;
  public readonly statusCoder: number;

  constructor(message: string, statusCode = 400) {
    this.message = message;
    this.statusCoder = statusCode;
  }
}

export default AppError;
