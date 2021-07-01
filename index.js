const fetch = require("node-fetch");
const { argv } = require("process");

main(argv[2] || 15357, parseInt(argv[3] || 100));

async function main(sn, time) {
    console.log(sn, time);

    let count = 0;
    while (time--) {
        let nologinuser = await fetch("https://ani.gamer.com.tw/ajax/getdeviceid.php").then((r) => r.headers.get("set-cookie").split(";")[0].split("=")[1]);
        count += await fetch("https://ani.gamer.com.tw/ajax/videoStart.php?sn=" + sn, {
            headers: {
                cookie: "nologinuser=" + nologinuser,
            },
        }).then((r) => r.ok);
        console.log(count);
        await sleep(500);
    }

    console.log("Total: " + count);
    return count;
}

function sleep(t = 1000) {
    return new Promise((r) => setTimeout(r, t));
}
