const Main = ({id, children}) => {
    return (
        <>
            <div className={id}>
                {children}
            </div>
        </>
    );
};

export default Main;