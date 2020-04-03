import React from 'react';

export default function AddEntry(){

    return(
        <div><h1>Add to your diary here:</h1>
            <form>
                <label>Entry:
                    <input
                    name="dearDiary"
                    />
                </label>

                <label>Who was involved:
                    <input 
                    name="whoItWasWith"
                    />
                </label>

                <label>When did it happen?
                    <input
                    name="whenItHappened"
                    />
                </label>

                <button>Add to Diary</button>
            </form>
        </div>
    )
}