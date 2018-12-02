const Twitter = require('twitter');

const client = new Twitter({
 consumer_key: '3FBvhdWzCyojUJ6i6WnUp0loI',
 consumer_secret: 'AA8xYoatm7mhSp5rSwts7sgLj0mSt8wTRF4cM3HWG16SfJp6SO',
 access_token_key: '1068990524370100224-Vi2YWgq0Q8OHjf1qRvxxVVVuCXUVhd',
 access_token_secret: 'xiQsO0AlbMAOf19JpaYGMlGThkHBkPgNTQrzHU0G6ddrH'
});

module.exports = function (search) {
  return client.get('search/tweets', {q: search});
};


