const fetch = require("node-fetch");
const { argv } = require("process");

main(argv[2] || 15357, argv[3] || 100);

async function main(sn, time) {
    console.log(sn, time);
    let url = "https://ani.gamer.com.tw/ajax/videoStart.php?sn=" + sn;

    let count = 0;
    while (time--) {
        count += await fetch(url).then((r) => r.ok);
        console.log(count);
        await sleep(500);
    }

    console.log("Total: " + count);
    return count;
}

function sleep(t = 1000) {
    return new Promise((r) => setTimeout(r, t));
}
