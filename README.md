npm install fs;
npm install jsonwebtoken

node generate_jwt.js

Test token:
curl -v -H "Authorization: Bearer [Token]" "https://api.music.apple.com/v1/catalog/us/songs/203709340"

