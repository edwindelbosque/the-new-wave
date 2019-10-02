# The New Wave :: Modern News

This application was built with `create-react-app`.

## Check it out in GitHub Pages [here](https://edwindelbosque.github.io/the-new-wave/)!

<img width="1433" src="https://user-images.githubusercontent.com/48811985/66016588-d2096780-e4c6-11e9-9405-ab2ba1fdc996.png">

Add in the functionality so that a user can search through the news articles.  After a user has typed a search query, a user should either be able to press `Enter` or `Search` to filter out the correct news articles.  The search functionality should only filter through the selected news articles.

**Add/Update any tests necessary.  Remember to include tests for any new methods you have created or changes in state** 

### Iteration 4 (extension - do not attempt until iterations 0 - 3 are completed)

Instead of importing the news data from the data directory, use the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) to get the data.  Read this [article](https://www.robinwieruch.de/react-fetching-data) on where you should fetch your data in React.

Here is what the endpoint looks like to get the news data.

| Purpose | URL | Verb | Request Body | Sample Success Response |
|----|----|----|----|----|
| Get all news data | `https://whats-new-api.herokuapp.com/api/v1/news_data` | GET | none | `{ "message": "Hello, I am Dr. Watson..." }` |

**Note: This will likely break some of your previous tests.  No worries, we will discuss testing async functionality in a future lesson.**
