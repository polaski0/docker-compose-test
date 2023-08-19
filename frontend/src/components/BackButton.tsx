import { Link } from 'react-router-dom';

const defaultProps = {
    className: 'absolute left-3 top-3 underline hover:-translate-y-1 transition-transform z-[1]'
}

interface Props extends React.HTMLAttributes<HTMLAnchorElement> { }

const BackButton = (props: Props) => {
    const { className } = { ...defaultProps, ...props };
    return (
        <Link to={'/'} className={className} {...props}>Back</Link>
    )
}

export default BackButton;