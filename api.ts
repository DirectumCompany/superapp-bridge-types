import { AppError } from './error';
import { NavigateOptions, SystemPath, To } from './navigation';
import { ShowModalCallback } from './modal';
import { ILogger } from './logger';
import { ToastConfig } from "./toast";

/** Клиентское API супер-аппа. */ 
export type SuperAppBridge = {
  /** Функции для получения информации о приложении. */
  application: {
    getLocalization: () => string;
    getTheme: () => string;
  };

  /** Функции для работы с модальным окном. */
  modal: {
    show: ShowModalCallback<unknown>;
  };

  /**
   * Выполняет запрос.
   * @param {string} url - адрес запроса.
   * @param {RequestInit} [options={}] - Опции запроса. Метод по умолчанию «GET».
   * @returns {Promise} Промис запроса.<br/>
   *  При ошибке возвращается оригинальный объект ошибки с актуализированным текстом, записанным в свойство **message** объекта.
   */
  fetch: <T>(url: string, options?: RequestInit) => Promise<T|null>;

  /** Функции для работы с навигацией. */
  navigation: {
    /** Блокирует переход со страницы. */
    lockNavigate: () => void;

    /**
     * Функция для перехода по маршрутам апплета.
     * В качестве ссылки для перехода можно указать как строку, так и объект.
     */
    navigate: (to: To | SystemPath, options?: NavigateOptions) => void;

    /** Убирает блокировку перехода со страницы. */
    unlockNavigate: () => void;
  };

  /** Отображает ошибку. */
  showError: (error: AppError) => void;

  /** Функции для работы с хранилищем. */
  storage: {
    set: (key: string, value: string) => void;
    get: (key: string) => string | null;
    delete: (key: string) => void;
    clear: () => void;
  };

  /** Функции для работы с логгером. */
  logger: ILogger;

  /** Функции для работы с уведомлениями. */
  toast: {
    /**
     * Функция открытия уведомления.
     * @param {ToastConfig} config - Конфигурация уведомления.
     * @return {string|null} ID уведомления или null в случае дубликата.
     */
    show: (config: ToastConfig) => string | null;

    /**
     * Функция закрытия уведомления.
     * @param {string} id - Идентификатор уведомления.
     */
    close: (id: string) => void;

    /**
     * Функция закрытия уведомлений по контексту.
     * @param {string} context - Контекст уведомлений.
     */
    clearContext: (context: string) => void;
  };
  /** Функции для работы с боковой панелью. */
  sidebar: {
    /** Функция закрытия боковой панели в мобильном представлении. */
    close: () => void,
    /** Функция открытия боковой панели в мобильном представлении. */
    open: () => void,
  },
  /**
   * Функция для получения абсолютного пути до объекта системы.
   * @param {string} path - Относительный путь до объекта системы.
   * @return {string} Абсолютный путь до объекта системы.
   */
  getHyperlink: (path: string) => string,
};
