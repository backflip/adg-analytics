# ADG Analytics

Extremely basic analytics setup for the [Accessibility Developer Guide](https://github.com/Access4all/adg) to figure out which of our pages are visited and from which countries the visitors are from.

The script saves the referer URL and visitor country to a Google Spreadsheet (via Google form). The country is looked up via [`geoip-lite`](https://www.npmjs.com/package/geoip-lite).

- Spreadsheet: https://docs.google.com/spreadsheets/d/1ZRNf8gV7yXUnS-DZeY68rxLhTI85nrWUbk7JqhlUZus/edit?usp=sharing
- Form: https://docs.google.com/forms/d/1zlRp22ekyqRUlp119IwHvS-jnkXndYrqCF7xI5nh1NA/edit?usp=sharing

## Integration

Add "tracking pixel": `<img src="https://adg-analytics.now.sh" alt="">`

## Deployment

`npm run deploy`

This will use [`now-cli`](https://github.com/zeit/now-cli) to publish to `https://adg-analytics.now.sh`.
