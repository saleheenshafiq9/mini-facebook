import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useHttpClient } from "../UIElements/hooks/http-hooks";
import StoriesList from "./StoriesList";
import "./Story.css";

const Story = (props) => {

  const [loadedStories, setLoadedStories] = useState();
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const userId = useParams().userId;

  useEffect(() => {
    const fetchStories = async () => {
      const responseData = await sendRequest(
        "http://localhost:5000/api/stories"
      );
      console.log(responseData.stories);
      setLoadedStories(responseData.stories);
    };
    fetchStories();
  }, [sendRequest]);


  return (
    <div>
      <StoriesList items={loadedStories} />
    </div>
  );
};

export default Story;
