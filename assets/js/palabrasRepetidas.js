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
    }
} 

const showResults = (word, results, node) => {
    for(const result in results) {
        node.insertaAdjacentHTML(
            'beforeend',
            <p>
                <strong>${word}: ${result} </strong>
                <span>Cantidad: ${results[result]}</span>
            </p>
        )
    }
}
