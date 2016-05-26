var pageMod = require("sdk/page-mod");

pageMod.PageMod({

    include: "*",
    contentScriptFile: "./hide-cookie-bar.js"
});
