import dotenv from "dotenv";

dotenv.config();

const whitelist = process.env.WHITELISTED_DOMAINS ? process.env.WHITELISTED_DOMAINS.split(",") : [];
const corsOptions = {
     origin: function (origin: string, callback: Function) {
          if (!origin || whitelist.indexOf(origin) !== -1) {
               callback(null, true);
          } else {
               callback(console.log(`\n⚠️ [server] Attempt to fetch from unknown origin\n`));
          }
     },

     credentials: true,
};

export default corsOptions;
