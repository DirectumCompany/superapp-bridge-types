import { SuperAppBridge } from './api';

/**
 * Результат монтирования.
 */
export interface IMountResult {
  render(props: object): void;
  unmount(): void;
}

/**
 * Функция монтирования.
 */
export type MountFunction = (
    /** Контейнер. */
    container: HTMLDivElement,
    /** Имя приложения. */
    appName: string,
    /** Свойства монтируемого компонента. */
    props: object
) => IMountResult;

/**
 * Информация о маршруте, который поддерживает компонент.
 */
export interface IRouteInfo {
  /** Путь. */
  path: string;
  /** Функция монтирования. */
  mount: MountFunction;
  /** Дочерние маршруты. */
  children?: Array<IRouteInfo>;
}

/**
 * Параметры инициализации.
 */
export interface IInitOptions {
  appName: string;
  api: SuperAppBridge;
}

/** Аргументы выполнения действия. */
export interface IEntityActionArgs {
  /** Имя приложения. */
  appName: string;
  /** Идентификатор типа сущности. */
  entityType: string;
  /** Идентификатор сущности. */
  entityId: string;
  /** Идентификатор действия. */
  actionId: string;
  /** Параметры действия. */
  parameters?: Record<string, unknown>;
}

/** Ошибка действия. */
export interface IMiniAppError {
  /** Сообщение ошибки. */
  message: string;
  /** Детали ошибки. */
  details: string;
}

/** Результат выполнения действия. */
export interface IEntityActionResult {
  /** Признак успешности. */
  isSuccess: boolean;
  /** Результат валидации. */
  validationResult?: Array<IValidationMessage>;
  /** Ошибка. */
  error?: IMiniAppError;
}

/** Сообщение об ошибке валидации. */
interface IValidationMessage {
  /** Тип ошибки. */
  type: 'error' | 'warning' | 'information';
  /** Сообщение об ошибке. */
  message: string;
  /** Связанные свойства. */
  relatedPropertyIds?: Array<string>;
}


/**
 * Интерфейс встраиваемого компонента.
 */
export interface IRemoteEntry {
  /** Маршруты обрабатываемые компонентом. */
  routes: Array<IRouteInfo>;
  /** Функция инициализации компонента. */
  init: (options: IInitOptions) => void;
  /** Действия компонента. */
  actions: {
    executeEntityAction(args: IEntityActionArgs): Promise<IEntityActionResult>;
  }
}
