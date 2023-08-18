import React from 'react';

const defaultProps = {
    className: ''
};

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}

type Ref = HTMLButtonElement;

const Button = React.forwardRef<Ref, Props>((props, ref) => {
    const { children, className } = { ...defaultProps, ...props };

    return (
        <button className={className} ref={ref} {...props}>{children}</button>
    )
});

export default Button;