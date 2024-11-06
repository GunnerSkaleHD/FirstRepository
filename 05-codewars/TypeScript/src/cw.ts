export function josephusSurvivor(n: number, k: number) {
    const items: number[] = [];
    for (let i = 0; i < n; i++) {
        items.push(i + 1);
    }
    console.log(items);
    if (items.length === 0) {
        return [];
    }
    let resultList: number[] = [];
    let removeLocation: number = 0;
    let targetLength: number = items.length;
    while (targetLength !== resultList.length) {
        removeLocation = removeLocation + k;
        // console.log(removeLocation);
        // console.log(items.length);
        while (removeLocation > items.length) {
            removeLocation = removeLocation - items.length;
            // console.log(removeLocation);
            // console.log("verkleinert");
        }
        resultList.push(items[removeLocation - 1]);

        items.splice(removeLocation - 1, 1);
        // console.log(items);
        removeLocation = removeLocation - 1;
    }
    // console.log(resultList);
    // for (let i = 0; i < items.length; i++) {

    // }

    return resultList[resultList.length - 1];
}
josephusSurvivor(7, 3);
