;(function () {
    // Get and write the Javascript for current page
    const tag = document.getElementById('tag').text
    const jsbox = document.getElementById('js')
    jsbox.innerHTML += tag

    // Write title with current page
    let path = window.location.pathname
    let page = path.split('/').pop()
    page = page.replace(/%20/g, ' ')
    page = page.replace('.html', '')

    const h1 = document.getElementById('h1')
    h1.innerHTML += page
    document.title = page
})()
