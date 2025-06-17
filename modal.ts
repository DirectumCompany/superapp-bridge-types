/** Функция открытия модального окна. */
export type ShowModalCallback<TResult = unknown> = (args: ShowModalArgs<TResult>) => Promise<TResult>;

/** Параметры открытия модального окна. */
export type ShowModalArgs<TResult> = {
  /** Идентификатор. */
  id: string;
  /** Заголовок. */
  title?: string;
  /** Функция монтирования контента {@link MountModalContent}. */
  mount: MountModalContent<TResult>;
};

/**
 * Функция монтирования контента модального окна.
 * @template TResult
 * @param { Element } container Элемент DOM с содержимым модального окна.
 * @param {CloseModalCallback<TResult>} close Функция закрытия модального окна.
 * @returns {CleanupModalContentCallback} Функция очистки контента модального окна.
 */
export type MountModalContent<TResult> = (
  container: Element,
  close: CloseModalCallback<TResult>
) => CleanupModalContentCallback;

/**
 * Функция закрытия модального окна.
 * @template TResult
 * @param {TResult|undefined} [result] Результат, который возвращается при закрытии модального окна.
 */
export type CloseModalCallback<TResult> = (result?: TResult) => void;

/**
 * Функция очистки контента модального окна.
 */
export type CleanupModalContentCallback = () => void;
