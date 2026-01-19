import { AppError } from './error';
import { NavigateFunction, Target, Url } from './navigation';
import { ShowModalCallback } from './modal';
import { LoggerFactory, LogTracer } from './logger';
import { ToastConfig } from './toast';
import { ViewMode } from './theme';

/** Клиентское API супер-аппа. */ 
export type SuperAppBridge = {
  /** API для получения информации о приложении. */
  application: {
    /**
     * Функция для получения локализации супер-аппа.
     * @returns {string} Код строки локализации.
     */
    getLocalization: () => string;

    /**
     * Функция для получения темы супер-аппа.
     * @returns {string} Название темы.
     */
    getTheme: () => string;
  };

  /** API для работы с модальным окном. */
  modal: {
    show: ShowModalCallback;

    /**
     * Функция закрытия модального окна.
     * @param {string} id - Идентификатор модального окна.
     */
    close: (id: string) => void;

    /** z-index модальных окон Omni. */
    zIndex: number;
  };

  /**
   * Выполняет запрос.
   * @param {string} url - адрес запроса.
   * @param {RequestInit} [options={}] - Опции запроса. Метод по умолчанию «GET».
   * @returns {Promise} Промис запроса.<br/>
   *  При ошибке возвращается оригинальный объект ошибки с актуализированным текстом, записанным в свойство **message** объекта.
   */
  fetch: <T>(url: string, options?: RequestInit) => Promise<T|null>;

  /**
   * Функция открытия ссылки.
   * @param {Url} url - ссылка.
   * @param {Target} [target=Target.BLANK] - способ загрузки страницы.
   */
  open: (url: Url, target?: Target) => void;

  /** API для работы с навигацией. */
  navigation: {
    /**
     * Блокирует переход со страницы. При попытке перехода по ссылке после блокирования,
     * будет отображаться окно с подтверждением перехода.
     */
    lockNavigate: () => void;

    navigate: NavigateFunction;

    /** Убирает блокировку перехода со страницы. */
    unlockNavigate: () => void;
  };

  /**
   * Функция отображения ошибки.
   * @param {AppError} error - Ошибка.
   */
  showError: (error: AppError) => void;

  /** API для работы с хранилищем. */
  storage: {
    /**
     * Функция для установки значения в localStorage.
     * @param {string} key - Ключ.
     * @param {string} value - Значение.
     */
    set: (key: string, value: string) => void;

    /**
     * Функция получения значения из localStorage.
     * @param {string} key - Ключ.
     *
     * @return {string|null} Значение.
     */
    get: (key: string) => string | null;

    /**
     * Функция удаления значения из localStorage.
     * @param {string} key - Ключ.
     */
    delete: (key: string) => void;

    /**
     * Функция очистки localStorage.
     */
    clear: () => void;
  };

  /** API для работы с уведомлениями. */
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

  /** API для работы с боковой панелью. */
  sidebar: {
    /** Функция закрытия боковой панели в мобильном представлении. */
    close: () => void,

    /** Функция открытия боковой панели в мобильном представлении. */
    open: () => void,
  },

  /**
   * Функция для получения абсолютного пути до объекта системы.
   * @deprecated Используйте getEntityHyperlink
   * @param {string} path - Относительный путь до объекта системы.
   * @return {string} Абсолютный путь до объекта системы.
   */
  getHyperlink: (path: string) => string,

  /**
   * Функция для получения ссылки до карточки сущности.
   * @param {string | number} id - Идентификатор объекта системы.
   * @param {string} type - GUID сущности.
   * @return {string | undefined} Абсолютный путь до карточки сущности. undefined - если url не определен в апплете.
   */
  getEntityHyperlink: (id: string | number, type: string) => string | undefined,

  /** Базовый путь до API. */
  apiUrl: string,

  /** Фабрика логгеров. */
  loggerFactory: LoggerFactory;

  /** Трейсер. */
  tracer: LogTracer;

  /**
   * Функция для определения текущего режима отображения интерфейса на основе ширины контейнера.
   * @return {ViewMode} Текущий режим отображения (desktop/tablet/mobile).
   */
  getContainerSize: () => ViewMode;
};
