/** Конструктор компонента.
 * @template P
 * @param {props<P>} props Аргументы.
 * @returns {Element} Компонент для рендера.
 */
type ComponentConstructor<P> = (props: P) => Element<any, any> | null;

/** Компонент для рендера. */
type Element<
  P = any,
  T extends string | ComponentConstructor<P> = string | ComponentConstructor<P>,
> = {
  /** Тип компонента. Наследуется от конструктора компонента {@link ComponentConstructor}. */
  type: T;
  /** Аргументы. */
  props: P;
  /** Уникальный идентификатор. */
  key: string | null;
};

/** Компонент для рендера. */
export type Component = Element | boolean | null | undefined;
