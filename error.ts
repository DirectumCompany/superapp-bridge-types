/** Ошибка, получаемая из микрофронта. */
export type AppError = {
  /** Текст ошибки. */
  message: string;
  /** Детали ошибки. */
  details: string;
};
