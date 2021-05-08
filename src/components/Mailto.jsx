const Mailto = ({ subject = '', body = '', children }) => {
    let params = subject || body ? '?' : '';
    return (
        <a href={`mailto:${'appcresi@gmail.com'}${params}`} style={{color: "#3e86eb"}} target="_blank" rel="noreferrer">
            {children}
        </a>
    );
};

export default Mailto;