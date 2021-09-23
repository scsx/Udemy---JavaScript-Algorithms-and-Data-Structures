;(function () {
    // Get and write the Javascript for current page
    const mainscript = document.getElementById('mainscript').text
    const jsbox = document.getElementById('js')
    jsbox.innerHTML += mainscript

    // Write title and h1 with current page
    let path = window.location.pathname
    let page = path.split('/').pop()
    page = page.replace(/%20/g, ' ').replace('.html', '')
    const h1 = document.getElementById('h1')
    h1.innerHTML += page
    document.title = page
})()
