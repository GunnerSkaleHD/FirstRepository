export const josephus = <T>(items: T[], k: number): T[] => {
  if (items.length === 0) {
    return [];
  }
  let resultList: T[] = [];
  let removeLocation: number = 0;
  let targetLength: number = items.length;
  while (targetLength !== resultList.length) {
    removeLocation = removeLocation + k;
    while (removeLocation > items.length) {
      removeLocation = removeLocation - items.length;
    }
    resultList.push(items[removeLocation - 1]);
    items.splice(removeLocation - 1, 1);
    removeLocation = removeLocation - 1;
  }
  return resultList;
};

josephus([1, 2, 3, 4, 5, 6, 7], 3);
