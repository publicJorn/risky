import { getOwnProp } from './utils/ownProp'

export const NODE_ENV = getOwnProp<string>(process.env, 'NODE_ENV', '')
export const STATIC_PORT = getOwnProp<string>(process.env, 'STATIC_PORT', '')
export const WS_PORT = getOwnProp<string>(process.env, 'WS_PORT', '')
export const DEBUG = getOwnProp<string>(process.env, 'DEBUG', '')
