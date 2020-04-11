import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DiaryCard from './DiaryCard';

export default function DiaryList(){

    const [diaryEntry, setDiaryEntry ] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/entries/all')
        .then(response => {
            setDiaryEntry(response.data);
        })
        .catch(error => {
            console.log(error);
        });
    }, [])

    return(
        <div>
            {
                diaryEntry.map((item, key) => {
                  console.log(item); 
                return(
                    <DiaryCard item={item} key={key}/>
                );
                })
            }
        </div>
    )
}