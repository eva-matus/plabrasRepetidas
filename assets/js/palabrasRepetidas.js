
function getDocumentLetters() {
    var entrieText  = document.querySelector('#texto-entrada').textContent; 
    return entrieText.replace(/[^0-9a-z]/gi, "" ).toUpperCase().split("")
}

function countLetter(arrayText) {
    var result = {}
    arrayText.forEach(letter => {
        if(!result[letter] ) {
            result[letter] = 1
        }else {
            result[letter] += 1
        } 
    })
    return result
}

function insertLetterResults(result) {
    var resultsArray = Object.entries(result)
    resultsArray.forEach(values => {
        var resultTag = document.querySelector('#resultados')
        var paragraph = document.createElement("p")
        var strong = document.createElement("strong")
        var span = document.createElement("span")
        var strongText = document.createTextNode(`Letra: ${values[0]}`);
        var spanText = document.createTextNode(` Cantidad: ${values[1]}`);
        strong.appendChild(strongText)
        span.appendChild(spanText)
        paragraph.appendChild(strong)
        paragraph.appendChild(span) 
        resultTag.appendChild(paragraph)
    })
}

function letterCount(){
    var lettersArray = getDocumentLetters() 
    var resultsArray = countLetter(lettersArray)
    insertLetterResults(resultsArray)
}

function getDocumentWords() {
    var entryText  = document.querySelector('#texto-entrada').textContent; 
    return entryText.match(/\b(\w+)\b/g)
}

function countWords(wordArray) {
    var result = {}
    wordArray.forEach(word => {
        var capitalizedWord = word.toUpperCase() 
        if(!result[capitalizedWord] ) {
            result[capitalizedWord] = 1
        }else {
            result[capitalizedWord] += 1
        } 
    })
    return result
}

function insertWordResults(result) {
    var resultsArray = Object.entries(result)
    resultsArray.forEach(values => {
        var resultTag = document.querySelector('#resultados2')
        var paragraph = document.createElement("p")
        var strong = document.createElement("strong")
        var span = document.createElement("span")
        var strongText = document.createTextNode(`${values[0]}`);
        var spanText = document.createTextNode(` : ${values[1]}`);
        strong.appendChild(strongText)
        span.appendChild(spanText)
        paragraph.appendChild(strong)
        paragraph.appendChild(span) 
        resultTag.appendChild(paragraph)
    })
}

function wordCount(){
    var wordsArray = getDocumentWords() 
    var resultsArray = countWords(wordsArray)
    insertWordResults(resultsArray)
}

letterCount()
wordCount()
