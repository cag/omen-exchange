declare module '3box'
declare module '3box-comments-react'
declare module '@react-corekit/use-interval'
declare module '@realitio/realitio-lib/formatters/question'
declare module '@realitio/realitio-lib/formatters/template'
declare module 'apollo-link-logger'
declare module 'react-draggable'
declare module 'react-share'
// See: https://github.com/facebook/create-react-app/issues/10109
declare module "react/jsx-runtime" {
    export default any;
}

declare type Maybe<T> = T | null

declare type KnownToken = 'cdai' | 'usdc' | 'dai' | 'weth' | 'owl' | 'chai' | 'gno' | 'pnk' | 'dxd'

declare type KnownArbitrator = 'kleros' | 'unknown'
