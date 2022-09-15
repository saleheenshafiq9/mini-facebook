import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Feed from "../Feed/Feed";
import { useHttpClient } from "../UIElements/hooks/http-hooks";
import ThoughtsList from "./ThoughtsList";

const Thoughts = (props) => {

  const [loadedThoughts, setLoadedThoughts] = useState();
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const userId = useParams().userId;

  useEffect(() => {
    const fetchThoughts = async () => {
      const responseData = await sendRequest(
        "http://localhost:5000/api/thoughts"
      );
      setLoadedThoughts(responseData.thoughts);
    };
    fetchThoughts();
  }, [sendRequest]);

  return (
    <div>
      <ThoughtsList items={loadedThoughts} />
    </div>
  );
};

export default Thoughts;
