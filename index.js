const cats = ["Milo", "Otis", "Garfield"] 
function destructivelyAppendCat() {
    cats.push('Ralph')
}
function destructivelyPrependCat() {
    cats.unshift('Bob')
}
function destructivelyRemoveLastCat() {
    cats.pop()
}
function destructivelyRemoveFirstCat() {
    cats.shift()
}
function appendCat() {
    let copyOfCats = [...cats, "Broom"]
    return copyOfCats
}
function prependCat() {
    let copyOfCats = ["Arnold", ...cats]
    return copyOfCats
}
function removeLastCat() {
    let copyOfCats = cats.slice(0, cats.length - 1)
    return copyOfCats
}
function removeFirstCat() {
    let copyOfCats = cats.slice(1)
    return copyOfCats
}