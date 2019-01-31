const FORM_ID = "1FAIpQLSdl3miEzM8zScLUaExhLR3LLkP8umN_0iNSUMl664IwMx6QQQ";
const FORM_FIELD_URL = "entry.401360865";
const FORM_FIELD_COUNTRY = "entry.398881872";
const DOMAIN = "https://www.accessibility-developer-guide.com";

module.exports = async (req, res) => {
  const { send } = require("micro");
  const { promisify } = require("util");
  const request = require("request");
  const requestIp = require("request-ip");
  const geoIp = require("geoip-lite");

  // Get referer URL
  const url = req.headers.referer;

  // Report referers from our own domain only
  if (url && url.match(DOMAIN)) {
    // Look up IP
    const clientIp = requestIp.getClientIp(req);
    const geoInfo = geoIp.lookup(clientIp);
    const country = geoInfo ? geoInfo.country : "";

    // Post to google form
    await promisify(request.post)(
      `https://docs.google.com/forms/d/e/${FORM_ID}/formResponse`,
      {
        form: {
          [FORM_FIELD_URL]: url,
          [FORM_FIELD_COUNTRY]: country
        }
      }
    );
  }

  // Send transparent gif
  const gif = Buffer.from(
    "R0lGODlhAQABAIAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",
    "base64"
  );

  res.setHeader("Content-Type", "image/gif");

  send(res, 200, gif);
};
