// @flow

export type Func<Err, Res> =
  & ((callback: (err: Err, res: Res) => void) => mixed);

export type Funcs<Err, Res> =
  Array<Func<Err, Res>>;

export type Callback<Err, Res> =
  & ((err: null, res: Array<Res>) => mixed)
  & ((err: Err, res: null) => mixed);
