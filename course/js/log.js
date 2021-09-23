const isCyclic = (obj) => {
    const seenObjects = []
    const detect = (obj) => {
        if (obj && typeof obj === 'object') {
            if (seenObjects.indexOf(obj) !== -1) {
                return true
            }
            seenObjects.push(obj)
            for (var key in obj) {
                if (obj.hasOwnProperty(key) && detect(obj[key])) {
                    return true
                }
            }
        }
        return false
    }
    return detect(obj)
}

const log = (msg) => {
    const logger = document.getElementById('log')
    console.log(msg)
    if (typeof msg === 'object') {
        if (isCyclic(msg)) {
            logger.innerHTML += `${msg.toString()} <small class='circularobject'>circular object</small><br />`
        } else {
            logger.innerHTML += `${JSON.stringify(msg)}<br />`
        }
    } else {
        logger.innerHTML += msg + '<br />'
    }
}