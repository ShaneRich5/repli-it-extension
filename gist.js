var containers = document.getElementsByClassName('js-gist-file-update-container')

languageExtensions = {
    'py': 'python',
    'java': '',
}

Array.prototype.forEach.call(containers, function(container) {    
    var fileActions = container.getElementsByClassName('file-actions')[0]
    var gistUrl = 'https://gist.github.com' + fileActions.childNodes[1].getAttribute('href')
    var path = gistUrl.split('.')
    var extension = path[path.length - 1]
    var language = languageExtensions[extension]

    if (language == undefined) {
        return;
    }

    var replUrl = 'https://repl.it/languages/' + language + '?gist=' + gistUrl

    var replBtn = document.createElement('button');
    var buttonImg = document.createElement('img')

    buttonImg.setAttribute('src', 'https://avatars2.githubusercontent.com/u/983194?v=3&s=400')
    buttonImg.setAttribute("max-width", "100%")
    buttonImg.setAttribute("height", "20px")
    replBtn.appendChild(buttonImg);
    
    fileActions.insertBefore(replBtn, fileActions.firstChild)
    replBtn.addEventListener('click', function(event) {
        event.stopPropagation();
        window.location.href = replUrl;
    });
})
