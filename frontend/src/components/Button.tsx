import React from "react";

const defaultProps = {
    className: "px-4 py-2 outline outline-1 rounded-md transition-all duration-200"
};

type Variant = "danger" | "success";

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    variant?: Variant;
}

type Ref = HTMLButtonElement;

const Button = React.forwardRef<Ref, Props>((props, ref) => {
    const { children, variant, className } = { ...defaultProps, ...props };

    const buttonVariant = (): string => {
        switch (variant) {
            case "danger": return "text-red-500 outline-red-500 hover:bg-red-500 hover:text-white";
            case "success": return "text-emerald-500 outline-emerald-500 hover:bg-emerald-500 hover:text-white";
            default: return "text-cyan-500 outline-cyan-500 hover:bg-cyan-500 hover:text-white";
        }
    };

    return (
        <button className={[className, buttonVariant()].join(" ")} ref={ref} {...props}>{children}</button>
    )
});

export default Button;