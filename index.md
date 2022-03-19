Dad Jokes React App
It is an app that lets people view and vote on cheesy jokes. To generate jokes, I have use the ICanHazDadJoke API 
![Dad jokes](https://user-images.githubusercontent.com/88712265/159139792-0b5f9bad-4104-4cfd-a1ce-efc70100bb51.jpg)
When the page loads, it will fetch 10 jokes.

The application lists the jokes, along with a “vote-up” button, a “vote-down” button, and the net score for each joke. Users can vote, and the net score should update.

When jokes are loading, It displays a loading spinner notifying the user that the jokes are being loaded. It also hide once the jokes have finished loading.
It will take of that no sorted jokes came.

It Shows the jokes sorted by net score, and update this as the scores change.
It also Stores the list of jokes, with votes in local storage. When users visit the app, it will show saved jokes, rather than fetching new jokes. However, the user should still be able to generate new jokes via the button, and these new jokes should replace the ones in local storage.
