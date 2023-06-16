
export function feladat01(szinek) {
    if (szinek.length == 0 || szinek.length == 1){
        return 0
    } 
    let counter = 0
    let kevertek = []
    for (i = 0; i < szinek.length; i++) {
        for (j = 0; j < szinek.length; j++) {
            if (i != j) {
                counter++
            }
        }
    }
    return counter
}
