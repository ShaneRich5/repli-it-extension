function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function addLine(line) {
    var layer = document.getElementsByClassName('ace_text-layer')[0]
    
    var lineGroupDiv = document.createElement('div')
    lineGroupDiv.setAttribute('class', 'ace_line_group')
    lineGroupDiv.setAttribute('style', 'height:16px')
    
    var lineDiv = document.createElement('div')
    lineDiv.setAttribute('class', 'ace_line')
    lineDiv.setAttribute('style', 'height:16px')

    codeElement = document.createElement('span')
    codeElement.setAttribute('class', 'ace_identifier')
    codeElement.textContent = line

    lineDiv.appendChild(codeElement)
    lineGroupDiv.appendChild(lineDiv)
    layer.appendChild(lineGroupDiv)
}

var gistUrl = getParameterByName('gist');

fetch(gistUrl)
    .then(response => response.text())
    .then(data => data.split('\n'))
    .then(lines => Array.prototype.forEach.call(lines, addLine))
