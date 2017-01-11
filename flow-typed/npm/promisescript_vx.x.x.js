// flow-typed signature: 0d887f324418e031d7ae56654005a988
// flow-typed version: <<STUB>>/promisescript_vx.x.x/flow_v0.37.4

declare module 'promisescript' {
  declare module.exports: ({
    url: string,
    type: 'script' | 'style' | 'json',
    exposed?: string
  }) => Promise<void>;
}
