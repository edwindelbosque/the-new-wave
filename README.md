# What's New?

This application was built with `create-react-app`.

### Iteration 2

Take a look at the `data` directory and inspect the other news data that is included.  There is an `entertainment.js`, `health.js`, `science.js`, and `technology.js` file.  Import the data and put it in `App's` state.  Create a Menu component that has navigation to display the different news articles.  When selecting a navigation link, it should display the relevant news articles in the NewsContainer component.  How can you reuse components?

**Add/Update any snapshot tests necessary.  Also add tests for any new methods you have created or changes in state** 

### Iteration 3 (extension - do not attempt until iterations 0 - 2 are completed)

Add in the functionality so that a user can search through the news articles.  After a user has typed a search query, a user should either be able to press `Enter` or `Search` to filter out the correct news articles.  The search functionality should only filter through the selected news articles.

**Add/Update any tests necessary.  Remember to include tests for any new methods you have created or changes in state** 

### Iteration 4 (extension - do not attempt until iterations 0 - 3 are completed)

Instead of importing the news data from the data directory, use the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) to get the data.  Read this [article](https://www.robinwieruch.de/react-fetching-data) on where you should fetch your data in React.

Here is what the endpoint looks like to get the news data.

| Purpose | URL | Verb | Request Body | Sample Success Response |
|----|----|----|----|----|
| Get all news data | `https://whats-new-api.herokuapp.com/api/v1/news_data` | GET | none | `{ "message": "Hello, I am Dr. Watson..." }` |

**Note: This will likely break some of your previous tests.  No worries, we will discuss testing async functionality in a future lesson.**
