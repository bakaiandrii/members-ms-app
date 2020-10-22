const elasticsearch = require('elasticsearch');

module.exports = {
  client: () => {
    return new elasticsearch.Client({ host: 'localhost:9200' });
  }
}
