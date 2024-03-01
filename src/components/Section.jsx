const Section = ({id, class_name, children}) => {
    return (
        <>
            <section id={id} className={class_name}>
                {children}
            </section>
        </>
    );
};

export default Section;