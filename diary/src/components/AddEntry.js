import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
import axios from 'axios';

export default function AddEntry(){

    const [ diaryEntry, setDiaryEntry ] = useState({
        dearDiary: '',
        whoItWasWith: '',
        whenItHappened: ''
    });

    // const history = useHistory();
    const addToDiaryURL = 'http://localhost:8000/api/entries/diaryEntry';

    const handleChange = event => {
        setDiaryEntry({...diaryEntry,
        [event.target.name]: event.target.value
    });
}


    const onSubmit = event => {
        event.preventDefault();
        console.log(diaryEntry);
        axios.post(`${addToDiaryURL}`, diaryEntry, 
        { 
            headers: {Authorization: localStorage.getItem('token') } 
        })
        .then(response => {
            console.log(localStorage);
        })
        .catch(error => {
            console.log(error);
        })
    }


    return(
        <div><h1>Add to your diary here:</h1>
            <form onSubmit={event => onSubmit(event)}>
                <label>Entry:
                    <input
                    name="dearDiary"
                    placeholder="Dear Diary...."
                    value={diaryEntry.dearDiary}
                    onChange={event => handleChange(event)}
                    />
                </label>

                <label>Who was involved:
                    <input 
                    name="whoItWasWith"
                    placeholder="Who was involved?"
                    value={diaryEntry.whoItWasWith}
                    onChange={event => handleChange(event)}
                    />
                </label>

                <label>When Did it Happen?
                    <input
                    name="whenItHappened"
                    placeholder="What Did it Happen?"
                    value={diaryEntry.whenItHappened}
                    onChange={event => handleChange(event)}
                    />
                </label>

                <button>Add to Diary</button>
            </form>
        </div>
    )
}
