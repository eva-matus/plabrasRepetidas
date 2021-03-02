window.oonload = () => {
    const imputText = document.querySelector('#texto-entrada');
    const resulText = document.querySelector('#resultados');

    const filteredWords = (str, regex, spacing) => {
        const arr = str
        .replace(regex, '')
        .toLowerCase()
        .split(spacing)
        .sort()
        .filter(value => value != '');
        return arr;
    }
    const countString = (strings) => {
        let counts = {};
        
        strings.forEach((string) => {
            counts[string] = (counts[striing] || 0) +1;
        });
        return counts;
    //Agrega resultado de letras o palabras al DOM
    const showResults = (word, results, node) => { // function showResults(word, results, node)
        for (const result in results) { // results.each do |result| 
            node.insertAdjacentHTML(
                'beforebegin',
                `<p>
                    <strong>${word}: ${result} </strong>
                    <span>Cantidad: ${results[result]}</span>
                </p>`
            )
        }
    }

    

    const words = filteredWords(inputText.textContent, /[^A-Za-z]\s/g, ' ');
    // console.log(filteredWords(inputText.textContent, /[^A-Za-z]\s*/g, ''));
    showResults('palabra', countString(words), resultText)
}
