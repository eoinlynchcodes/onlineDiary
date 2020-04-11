Register Endpoint:
http://localhost:8000/api/authentication/register

Add to Diary Endpoint:
http://localhost:8000/api/entries/diaryEntry


Next Step:

- Figure out why map function over the array isn't working. 

- axios.post the diaryEntry. Make the user id dynamic and automatically post to the right user's DB depending on who is logged in. 

-"Unable to map over undefined"... Find out why it is undefined.

-Get the username from params or token or something? 
Then automatically add it with diary entries so we know who's diary it corresponds to. This allows us to easily show each user their specific diary entries in future. 

- Deploy Front-end

- Deploy Back-end