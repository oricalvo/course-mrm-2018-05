export function createLogger(prefix: string): Logger {
  return {
    log: console.log.bind(console, prefix + ">"),
    warn: console.warn.bind(console, prefix + ">"),
    error: console.error.bind(console, prefix + ">"),
  }
}

export interface Logger {
  log(message: string);
  warn(message: string);
  error(message: string);
}
