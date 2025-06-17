import { AppError } from "./error";

/**
 * Событие для логирования. Может быть:
 * * стандартным классом {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error|Error};
 * * ошибкой мини-аппа;
 * * строкой, содержащей текст ошибки.
 */
export type LoggerEvent = Error | AppError | string;

/**
 * Интерфейс логгера супер-аппа.
 */
export interface ILogger {
  fatal: (event: LoggerEvent, payload?: unknown) => void,
  error: (event: LoggerEvent, payload?: unknown) => void,
  warn: (event: LoggerEvent, payload?: unknown) => void,
  info: (event: LoggerEvent, payload?: unknown) => void,
  debug: (event: LoggerEvent, payload?: unknown) => void,
  trace: (event: LoggerEvent, payload?: unknown) => void,
  forceFlush: () => Promise<void>,
}
