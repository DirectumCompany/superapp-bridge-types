import { Component } from './component';

/** Функция открытия модального окна. */
export type ShowModalCallback<TResult = unknown> = (args: ShowModalArgs<TResult>) => Promise<TResult>;

/** Параметры открытия модального окна. */
export type ShowModalArgs<TResult> = {
  /** Идентификатор. */
  id: string;
  /** Заголовок. */
  title?: string;
  /** Функция рендера контента {@link RenderModalContent}. */
  render: RenderModalContent<TResult>;
};

/**
 * Функция рендеринга контента модального окна.
 * @template TResult
 * @param {CloseModalCallback<TResult>} close Функция закрытия модального окна.
 * @returns {Component} Контент, который будет отображаться внутри модального окна.
 */
type RenderModalContent<TResult> = (close: CloseModalCallback<TResult>) => Component;

/**
 * Функция закрытия модального окна.
 * @template TResult
 * @param {TResult|undefined} [result] Результат, который возвращается при закрытии модального окна.
 */
export type CloseModalCallback<TResult> = (result?: TResult) => void;
