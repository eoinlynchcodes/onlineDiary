import React from "react";

export default function DiaryCard(props) {
  console.log(props);

  return (
    <div>
      <div>
        <h2>What Happened:</h2>
        <h2>{props.item.dearDiary}</h2>
      </div>

      <div>
          <h2>Who was there:</h2>
          <h2>{props.item.whoItWasWith}</h2>
      </div>

      <div>
          <h2>When it happened:</h2>
  <h2>{props.item.whenItHappened}</h2>
      </div>
    </div>
  );
}
