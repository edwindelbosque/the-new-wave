# The New Wave :: Modern News

This application was built with `create-react-app`.

## Check it out in GitHub Pages [here](https://edwindelbosque.github.io/the-new-wave/)!

<img width="1433" src="https://user-images.githubusercontent.com/48811985/66016588-d2096780-e4c6-11e9-9405-ab2ba1fdc996.png">

Instead of importing the news data from the data directory, use the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) to get the data.  Read this [article](https://www.robinwieruch.de/react-fetching-data) on where you should fetch your data in React.

Here is what the endpoint looks like to get the news data.

| Purpose | URL | Verb | Request Body | Sample Success Response |
|----|----|----|----|----|
| Get all news data | `https://whats-new-api.herokuapp.com/api/v1/news_data` | GET | none | `{ "message": "Hello, I am Dr. Watson..." }` |


## Built with
- React
- SCSS
- JSX
- Jest & Enzyme
