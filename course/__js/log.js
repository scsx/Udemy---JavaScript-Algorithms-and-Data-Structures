const log = (msg) => {
    console.log(msg)
    const logger = document.getElementById('log')
    if (typeof msg === 'object') {
        logger.innerHTML +=
            (JSON && JSON.stringify ? JSON.stringify(msg) : msg) + '<br />'
    } else {
        logger.innerHTML += msg + '<br />'
    }
}