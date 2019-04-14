# mini-wp


## Routes Documentation

| Title      | URL | Method | Request Body | Request Header | Response Success | Response Error |
| ---------- | --- | ------ | ------------ | -------------- | ---------------- | -------------- |
| user register | /user/register | POST | username(string)<br>email(string)<br>password(string) | none |username(string)<br>email(string)<br>password(string) | **internal server error (500)** |
| user login | /user/login | POST | email(string)<br>password(string) | none | email(string)<br>password(string) | **internal server error (500)** |
|google login / signup | /user/googleSignIn | POST | token(string) | none | username(string)<br>email(string)<br>password(string) | **internal server error (500)** |
| display articles | /articles | GET | none | none | Array of object<br>title(string)<br>content(string)<br>created_at(date)<br>author(string)<br>featured_image(string)<br>UserId(number)<br>tags(array) | **internal server error (500)** |
| create new article | /articles | POST | title(string)<br>content(string)<br>created_at(date)<br>author(string)<br>featured_image(string)<br>UserId(string) | token |  title(string)<br>content(string)<br>created_at(date)<br>author(string)<br>featured_image(string)<br>UserId(string) | **internal server error (500)** |
| get all my stories | /articles/stories | GET | none | token | array of obj article | **internal server error (500)** |
| read article | /articles/:articleId | GET | none | token | article details<br>title(string)<br>content(string)<br>created_at(date)<br>author(string)<br>featured_image(string)<br>UserId(string) | **internal server error (500)** |
| update article | /articles/:articleId | POST | title(string)<br>content<br>featured_image<br> | userid, token | updated data<br>title(string)<br>content<br>featured_image<br> | **internal server error (500)** |
| delete article | /articles/:articleId | DELETE | none | token, userid | deleted data<br>title(string)<br>content(string)<br>created_at(date)<br>author(string)<br>featured_image(string)<br>UserId(string) | **internal server error (500)** |
