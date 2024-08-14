function getOdds(nums) {
    const odds = [];
    nums.forEach(num => {
        if (num % 2 !== 0) {
            odds.push(num);
        }
    });
    console.log(odds)
}

numeros = [1,2,3,4,5];
getOdds(numeros);