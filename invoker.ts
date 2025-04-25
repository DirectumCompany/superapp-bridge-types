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

/**
 * Интерфейс встраиваемого компонента.
 */
export interface IRemoteEntry {
  /** Маршруты обрабатываемые компонентом. */
  routes: Array<IRouteInfo>;
  /** Функция инициализации компонента. */
  init: (options: IInitOptions) => void;
}
