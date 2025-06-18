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
  fatal: (event: LoggerEvent, payload?: Record<string, string>) => void,
  error: (event: LoggerEvent, payload?: Record<string, string>) => void,
  warn: (event: LoggerEvent, payload?: Record<string, string>) => void,
  info: (event: LoggerEvent, payload?: Record<string, string>) => void,
  debug: (event: LoggerEvent, payload?: Record<string, string>) => void,
  trace: (event: LoggerEvent, payload?: Record<string, string>) => void,
  forceFlush: () => Promise<void>,
}
