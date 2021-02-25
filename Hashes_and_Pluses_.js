function hashPlusCount(str) {
    let hashes = 0;
    let pluses = 0;
    for (let index = 0; index < str.length; index++) {
        let element = str[index];
        if (element === "#") {
            hashes++;
        } else if (element === "+") {
            pluses++;
        }
    }
    return [hashes, pluses];
}

function hashPlusBetter(str) {
    return [(str.match(/#/g) || []).length, (str.match(/\+/g) || []).length];
}

/*
const { PerformanceObserver, performance } = require("perf_hooks");
var t0 = performance.now();
hashPlusCount("##++528+#".repeat(100000));
var t1 = performance.now();
console.log(`Took ${t1 - t0} ms`);

var t2 = performance.now();
hashPlusBetter("##++528+#".repeat(100000));
var t3 = performance.now();
console.log(`Took ${t3 - t2} ms`);
*/
