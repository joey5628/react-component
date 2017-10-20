const resetConsole = () => {
    let originLog = console.log;
    if (process.env.NODE_ENV === 'production') {
        window['console']['log'] = () => { };
    } else {
        window['console']['log'] = originLog;
    }
};

export default resetConsole;