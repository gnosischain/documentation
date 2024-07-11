// src/components/Button/index.js
import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';

const Button = ({
    size = null,
    outline = false,
    variant = 'primary',
    block = false,
    disabled = false,
    className,
    style,
    link,
    label,
    onClick, // Add the onClick prop
}) => {
    const sizeMap = {
        sm: 'sm',
        small: 'sm',
        lg: 'lg',
        large: 'lg',
        medium: null,
    };
    const buttonSize = size ? sizeMap[size] : '';
    const sizeClass = buttonSize ? `button--${buttonSize}` : '';
    const outlineClass = outline ? 'button--outline' : '';
    const variantClass = variant ? `button--${variant}` : '';
    const blockClass = block ? 'button--block' : '';
    const disabledClass = disabled ? 'disabled' : '';
    return (
        <button
            className={clsx('button', sizeClass, outlineClass, variantClass, blockClass, disabledClass, className)}
            style={style}
            role="button"
            aria-disabled={disabled}
            onClick={onClick} // Attach the onClick handler
        >
            {label}
        </button>
    );
};

export default Button;
