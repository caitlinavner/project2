TICKR

As a consumer, I want access to various news outlets. I want the freedom to search specific topics and have a multitude of results to choose from.
The user will be prompted with a web authentication and will be able to save articles
to their accounts.
Separate API keys are used to grab articles from varying sources such as author, topic, news outlet, etc.

API source: https://newsapi.org/

Requirements/node dependencies:
User will need to run 'npm install' to install required dependencies to include:
"express": "^4.16.3",
"express-handlebars": "^3.1.0",
"mysql2": "^1.6.4",
"newsapi": "^2.4.0",
"nodemon": "^2.0.2",
"sequelize": "^5.21.4"

Running the app:
App can be utlized by running "node server.js".
A MYSQL database called 'Tickr" needs to be created along with a config.json containing the user's database info.

CSS platform used:
Materialize CSS

Deployed Heroku App:
https://unit15project2.herokuapp.com


Slideshow presentation link: https://docs.google.com/presentation/d/1n3---Wv6lzACx1w-lfM9C0NcFJBhUluBjw_pKIR6un0/edit?usp=sharing
