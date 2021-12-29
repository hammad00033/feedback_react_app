import React from "react";
import Card from "./shared/Card";
import { useState } from "react";
import Button from "./shared/Button";

const FeedbackForm = () => {
  const [text, setText]=useState('')
  const handleTextChange = (e)=>{
    setText(e.target.value)
  }
  return (
    <Card>
      <form>
        <h2>How would you rate your service with us</h2>
        {/* @todo input selesct component*/}
        <div className="input-group">
          <input onChange={handleTextChange} type="text" placeholder="Write your review" />
          <Button type="submit" version="secondary">Send</Button>
        </div>
      </form>
    </Card>
  );
};

export default FeedbackForm;
