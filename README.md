# What's New?

This application was built with `create-react-app`.

<img width="1433" alt="Screen Shot 2019-09-30 at 11 18 32 PM" src="https://user-images.githubusercontent.com/48811985/65936120-06b7e900-e40b-11e9-87c4-7edd501dd949.png">

![](https://user-images.githubusercontent.com/48811985/65935989-82fdfc80-e40a-11e9-9fd2-98450b22050a.gif)
![](https://user-images.githubusercontent.com/48811985/65935986-81343900-e40a-11e9-9540-c107ab489efb.gif)
![](https://user-images.githubusercontent.com/48811985/65935996-898c7400-e40a-11e9-9444-6aca3081180a.gif)

Add in the functionality so that a user can search through the news articles.  After a user has typed a search query, a user should either be able to press `Enter` or `Search` to filter out the correct news articles.  The search functionality should only filter through the selected news articles.

**Add/Update any tests necessary.  Remember to include tests for any new methods you have created or changes in state** 

### Iteration 4 (extension - do not attempt until iterations 0 - 3 are completed)

Instead of importing the news data from the data directory, use the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) to get the data.  Read this [article](https://www.robinwieruch.de/react-fetching-data) on where you should fetch your data in React.

Here is what the endpoint looks like to get the news data.

| Purpose | URL | Verb | Request Body | Sample Success Response |
|----|----|----|----|----|
| Get all news data | `https://whats-new-api.herokuapp.com/api/v1/news_data` | GET | none | `{ "message": "Hello, I am Dr. Watson..." }` |

**Note: This will likely break some of your previous tests.  No worries, we will discuss testing async functionality in a future lesson.**
