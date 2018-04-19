module.exports = {
    ok: function () {
        console.log("\x1b[33m", ...arguments, "\x1b[0m")
    },
    info: function () {
        console.log("\x1b[34m", ...arguments, "\x1b[0m")
    },
    success: function () {
        console.log("\x1b[32m", ...arguments, "\x1b[0m")
    },
    danger: function () {
        console.log("\x1b[31m", ...arguments, "\x1b[0m")
    },
    comment: function () {
        console.log("\x1b[37m", ...arguments, "\x1b[0m")
    },
};
