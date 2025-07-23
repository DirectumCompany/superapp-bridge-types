/* Тип действия с уведомлением. */
export enum ToastActionType {
    /* Кнопка. */
    BUTTON = 'button',
    /* Ссылка. */
    HYPER_LINK = 'hyperlink',
}

/* Действия с уведомлением. */
export type ToastAction = {
    /* Тип действия. */
    type: ToastActionType;
    /* Текст. */
    label: string;
    /* Ссылка. */
    href?: string;
    /* Обработчик нажатия. */
    onClick?: () => void;
};

/* Тип уведомления. */
export enum ToastType {
    /* Информация. */
    INFO = 'info',
    /* Предупреждение. */
    WARNING = 'warning',
    /* Ошибка. */
    ERROR = 'error',
    /* Успех. */
    SUCCESS = 'success',
}

/* Позиционирование уведомления. */
export enum ToastPosition {
    /* Вверху по центру. */
    TOP = 'top',
    /* Вверху слева. */
    TOP_LEFT = 'top-left',
    /* Вверху справа. */
    TOP_RIGHT = 'top-right',
    /* Внизу по центру. */
    BOTTOM = 'bottom',
    /* Внизу слева. */
    BOTTOM_LEFT = 'bottom-left',
    /* Внизу справа. */
    BOTTOM_RIGHT = 'bottom-right',
}

/* Конфигурация уведомления. */
export type ToastConfig = {
    /* Уникальный идентификатор. */
    id?: string;
    /* Тип. */
    type?: ToastType;
    /* Текст. */
    text?: string;
    /* Позиционирование. */
    position?: ToastPosition;
    /* Действия. */
    actions?: ToastAction[];
    /* Признак автоматического закрытия. */
    autoClose?: boolean;
    /* Время в миллисекундах до автоматического закрытия. */
    duration?: number;
    /* Признак отображения кнопки закрытия. */
    manualClose?: boolean;
    /* Признак отображения только на мобильных устройствах. */
    mobileOnly?: boolean;
    /* Контекст. */
    context?: string;
};
