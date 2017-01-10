// flow-typed signature: f7689eaedec8c88132dc476d1fee7264
// flow-typed version: <<STUB>>/superagent_vx.x.x/flow_v0.37.4

declare module 'superagent' {
  declare type Headers = { [header: string]: string };
  declare type BodyJSON =
    | string
    | number
    | boolean
    | null
    | Array<BodyJSON>
    | { [key: string]: BodyJSON };
  declare type Body = BodyJSON | FormData;
  declare type Query = string | { [parameter: string]: string };

  declare type Response = /* stream$Readable & */ {
    text: string;
    body: JSON;
    files: any;
    header: Headers;
    headers: Headers;
    type: string;
    charset: string;
    status: number;
    statusType: number;
    statusText: string;
    info: boolean;
    ok: boolean;
    redirect: boolean;
    clientError: boolean;
    serverError: boolean;
    error: Error;
    accepted: boolean;
    noContent: boolean;
    badRequest: boolean;
    unauthorized: boolean;
    notAcceptable: boolean;
    notFound: boolean;
    forbidden: boolean;
    xhr: XMLHttpRequest;
    get(header: string): string;
  };

  declare type ParseError = Error & {
    parse: true,
    original: Error,
    rawResponse: string | null,
    status: number,
    statusCode?: number,
  };

  declare type UnsuccessfulResponseError = Error & {
    original: Error,
    response: Response,
    status: number,
  };

  declare type CrossDomainError = Error & {
    crossDomain: true,
    status: number,
    method: string,
    url: string,
  };

  declare type RequestError =
    | Error
    | ParseError
    | UnsuccessfulResponseError
    | CrossDomainError;

  declare type CallbackHandler = (err?: RequestError, res?: Response) => mixed;

  declare type Request = /* Promise<Response> & stream$Writable  & */ {
    abort(): void;
    accept(type: string): Request;
    attach(field: string, file: string, filename?: string): Request;
    auth(user: string, name: string): Request;
    buffer(val?: boolean): Request;
    clearTimeout(): Request;
    end(callback?: CallbackHandler): Request;
    field(name: string, val: string): Request;
    get(field: string): string;
    on(name: string, handler: Function): Request;
    on(name: 'error', handler: (err: any) => void): Request;
    part(): Request;
    pipe(stream: stream$Writable, options?: Object): stream$Writable;
    query(val: Query): Request;
    redirects(n: number): Request;
    responseType(type: string): Request;
    send(data: string): Request;
    send(data: Object): Request;
    send(): Request;
    set(field: string, val: string): Request;
    set(field: Object): Request;
    timeout(ms: number): Request;
    type(val: string): Request;
    unset(field: string): Request;
    use(fn: Function): Request;
    withCredentials(): Request;
    write(data: string, encoding?: string): Request;
    write(data: Buffer, encoding?: string): Request;
    parse(fn: (res: Response, callback: (err: Error | null, body: any) => void) => void): Request;
  };

  declare type RequestMethod<Req> = (url: string, callback?: CallbackHandler) => Req;

  declare type SuperAgent<Req> = stream$Stream & {
    get: RequestMethod<Req>,
    post: RequestMethod<Req>,
    put: RequestMethod<Req>,
    head: RequestMethod<Req>,
    del: RequestMethod<Req>,
    delete: RequestMethod<Req>,
    options: RequestMethod<Req>,
    trace: RequestMethod<Req>,
    copy: RequestMethod<Req>,
    lock: RequestMethod<Req>,
    mkcol: RequestMethod<Req>,
    move: RequestMethod<Req>,
    purge: RequestMethod<Req>,
    propfind: RequestMethod<Req>,
    proppatch: RequestMethod<Req>,
    unlock: RequestMethod<Req>,
    report: RequestMethod<Req>,
    mkactivity: RequestMethod<Req>,
    checkout: RequestMethod<Req>,
    merge: RequestMethod<Req>,
    // m-search: RequestMethod<Req>,
    notify: RequestMethod<Req>,
    subscribe: RequestMethod<Req>,
    unsubscribe: RequestMethod<Req>,
    patch: RequestMethod<Req>,
    search: RequestMethod<Req>,
    connect: RequestMethod<Req>,

    parse(fn: (res: Response, callback: (err: Error | null, body: any) => void) => void): SuperAgent<Req>,
    saveCookies(res: Response): void,
    attachCookies(req: Req): void,
  };

  declare module.exports: SuperAgent<Request> & {
    (url: string): Request,
    (method: string, url: string): Request,
    agent(): SuperAgent<Request>,
  };
}
