import React, { useContext, useEffect, useState } from "react";
import { ContentViewRequestContext } from "../content_view_request/ContentViewRequestProvider";

export const NotificationList = () => {
  const currentUser = parseInt(localStorage.getItem("whoyou_user_id"));
  const { contentViewRequests, getContentViewRequests } = useContext(
    ContentViewRequestContext
  );
  const [
    contentViewRequestsByOthers,
    setContentViewRequestsByOthers,
  ] = useState([]);

  useEffect(() => {
    getContentViewRequests();
  }, []);

  useEffect(() => {
    const updatedContentViewRequestsByOthers = contentViewRequests.filter(
      (contentViewRequest) => {
        return contentViewRequest.requester.id !== currentUser;
      }
    );
    setContentViewRequestsByOthers(updatedContentViewRequestsByOthers);
  }, contentViewRequests);

  return (
    <div>
      {contentViewRequestsByOthers.map((contentViewRequest) => {
        return contentViewRequest.requester.name;
      })}
    </div>
  );
};
