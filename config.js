const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VUW5OqOBj8L3nVOVwVsWqqFvCGeEPBUbfOA5AAkatJQHHK/76lM1MzD3tmZ99SgfTX6e70K8gLTJGFGtB/BSXBtcfQfcmaEoE+0KswRAS0AfSYB/ogm3XdaMYtylhMtdoP5XGCZUm+4PMELUlvpMvTVJ5l9XLSewa3NigrP8XBN4BQabmlygXhUYAvu7Hha9h0/O66XsfpTOG22HY5zjYWgm4+g9sd0cME59GwjFGGiJdaqFl5mPyMfqKpaHmY860hKoOJuqwazj/X6Wg/VvYj/+zO/Hh29GcGFs8/oy+11L3bOuGDtJnTpYb9fScSYLP2En+zqzjVkGPvfI7WFu++0ac4yhE0IcoZZs2PdW8NqWzzGjEjvr7yYoCrg3yyt1QIh2v75FrHFZ5k/ipejc2fEWdLaV+ccMdf6K2idUXLSxHqSocbsv26R7uqWYrZMUIcTPmvxFfkIyvJ/9J9Ho2u1O40+4ETzUp3Ot1GRFxm8OQfinyb8o7S4e0uSnP6M/opV5IL2k1XquSo25jO85pPdR8l+9kFofVhFI+CJrhQOYk+6XusIt+xXF1HYrzIwmQIr9G8R1rwIiizrY56zvrI5JcePaWITKzBIarT9WRqwo1Y8lKu17lc+pZlOWNTMML13CGdgg4FsndOxvn5caMENSYEfeHWBgRFmDLiMVzkjz1BaAMP1hsUEMQe8gIlH4TuYqwdFqGsery0dXbSRTzWQrOPVeZKlWWcTy+HbrB2n0EblKQIEKUITjBlBWnmiFIvQhT0//7dBjm6sDfj7uMkoQ1CTChz86pMCw9+uPrx0QuCosrZpskD475ABPT5z23EGM4jetexyj0SxLhGRuwxCvqhl1J0awOIahygOx7AyYo98RXcTEQ26w3469N8lER3ynGRv/0iCj6SJD94EqHXeZKVAD6poSw/yUEg9SAMQlGWQBvg9zdzP/NHC0+Y25zGF7hUCn3JzzTdzEUN10c71x42vGmPCIKgz0iF2sD3gqQqnSJB+Te4lab7o838asHG3aAtWY3280t3y5Vy8gX3zVPQf/3sKaOAd7yx2tMm2/kItEH2iCB+3LwjK11R7qo9RexLf9Ff57uOXln+yhG7w75rfj8AEfNwSkEfGFNjpy618XC2W7cUOh5rw0gzIg18evQR9rcwHZF/8q1FFc9Fc8IXpJ4ahd1yWK6Nq8p1S48fXw9NDAfG+flfQO4tPTXiQ9XNKpuWhqib5qIa5HJiO9tV7neLodUbV3t36q6a4zEMjIUpcz1bGuBN3SkUTsYy8XQ3zMo5bkzEy1WXBZFhP9+nvWXl67BV5yVbW+eEdJUsuUjngahYcCBEqwxVLz26H/EWFE0TdnXTlMcHPlwEk/U6SHpOre1NTriMtHwYtE6TiA13NVf5B4M+hn3UQPpev/jxQF7fkxVi9Giz3Ls79B/efM04f2t/gXivxz/kSN9LWTdrjn7hLLCuWpbS2KfhKlEOZ52QdGS9MJ2KQbGzzxTcbr/boEw9FhYkA33g5ZAUGII2SD3KtM9n6uAMUeZlJegLitSVFF5SxNs/IxLx+twHAAA=',
    PREFIXE: process.env.PREFIX || "*",
    OWNER_NAME: process.env.OWNER_NAME || "Ibrahim Adams",
    NUMERO_OWNER : process.env.NUMERO_OWNER || " Ibrahim Adams",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "no",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || 'yes',
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'no',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});



