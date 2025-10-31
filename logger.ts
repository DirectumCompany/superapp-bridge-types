/** Аргументы. */
type Args = Array<unknown>;

/** Логгер. */
export type Logger = {
  /**
   * Вывести в лог сообщение уровня error.
   * @param {Error} ex - Исключение.
   * @param {string|undefined} [messageTemplate] - Шаблон сообщения.
   * @param {Args} args - Аргументы.
   */
  error(ex: Error, messageTemplate?: string, ...args: Args): void;
  /**
   * Вывести в лог сообщение уровня error.
   * @param {string} messageTemplate - Шаблон сообщения.
   * @param {Args} args - Аргументы.
   */
  error(messageTemplate: string, ...args: Args): void;
  /**
   * Вывести в лог сообщение уровня warning.
   * @param {Error} ex - Исключение.
   * @param {string|undefined} [messageTemplate] - Шаблон сообщения.
   * @param {Args} args - Аргументы.
   */
  warning(ex: Error, messageTemplate?: string, ...args: Args): void;
  /**
   * Вывести в лог сообщение уровня warning.
   * @param {string} messageTemplate - Шаблон сообщения.
   * @param {Args} args - Аргументы.
   */
  warning(messageTemplate: string, ...args: Args): void;
  /**
   * Вывести в лог сообщение уровня info.
   * @param {Error} ex - Исключение.
   * @param {string|undefined} [messageTemplate] - Шаблон сообщения.
   * @param {Args} args - Аргументы.
   */
  info(ex: Error, messageTemplate?: string, ...args: Args): void;
  /**
   * Вывести в лог сообщение уровня info.
   * @param {string} messageTemplate - Шаблон сообщения.
   * @param {Args} args - Аргументы.
   */
  info(messageTemplate: string, ...args: Args): void;
  /**
   * Вывести в лог сообщение уровня debug.
   * @param {Error} ex - Исключение.
   * @param {string|undefined} [messageTemplate] - Шаблон сообщения.
   * @param {Args} args - Аргументы.
   */
  debug(ex: Error, messageTemplate?: string, ...args: Args): void;
  /**
   * Вывести в лог сообщение уровня debug.
   * @param {string} messageTemplate - Шаблон сообщения.
   * @param {Args} args - Аргументы.
   */
  debug(messageTemplate: string, ...args: Args): void;
  /**
   * Вывести в лог сообщение уровня trace.
   * @param {Error} ex - Исключение.
   * @param {string|undefined} [messageTemplate] - Шаблон сообщения.
   * @param {Args} args - Аргументы.
   */
  trace(ex: Error, messageTemplate?: string, ...args: Args): void;
  /**
   * Вывести в лог сообщение уровня trace.
   * @param {string} messageTemplate - Шаблон сообщения.
   * @param {Args} args - Аргументы.
   */
  trace(messageTemplate: string, ...args: Args): void;
  /**
   * Логирование произвольного объекта.
   * @param {object} obj - Объект для логирования.
   * @returns {Logger} Копия логгера с добавленным объектом.
   */
  withObject(obj: object): Logger;
  /**
   * Логирование произвольного свойства.
   * @param {string} name - Имя свойства.
   * @param {unknown} value - Значение свойства.
   * @returns {Logger} Копия логгера с добавленным свойством.
   */
  withProperty(name: string, value: unknown): Logger;
};

/** Фабрика логгеров. */
export type LoggerFactory = {
  /**
   * Создать экземпляр логгера.
   * @param {string} loggerName - Имя логгера.
   * @returns {Logger} Экземпляр логгера.
   */
  createLogger(loggerName: string): Logger;
};

/** Спан. */
export type TraceSpan = {
  /** Завершить спан. */
  done(): void;
  /** Завершить спан с неудачей. */
  fail(): void;
  /** Завершить спан с отменой. */
  cancel(): void;
  /** Отметить старт модального окна. */
  setShowModalStart(): void;
  /** Отметить завершение модального окна. */
  setShowModalEnd(): void;
};

/** Трейсер. */
export type LogTracer = {
  /**
   * Создать спан.
   * @param {string} name - Имя трейсера.
   * @param {string} operation - Имя операции.
   * @returns {TraceSpan} Экземпляр стартованного спана.
   */
  createSpan: (name: string, operation: string) => TraceSpan;
};