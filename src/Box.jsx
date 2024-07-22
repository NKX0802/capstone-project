const Box = ({ children }) => {
    const boxStyle = {
        border: '2px solid #ccc',
        padding: '20px',
        borderRadius: '10px',
        maxWidth: '600px',
        margin: '20px',
        backgroundColor: "#E6F7FF",
    };

    return <div style={boxStyle}>{children}</div>;
};

export default Box;
