export enum HttpStatusCode {
  noContent = 200,
  unathorized = 401,
}

export type HttpResponse = {
  statusCode: HttpStatusCode
  body?: any
}
