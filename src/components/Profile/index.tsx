import React, { ReactElement } from "react";
import { withTrackClick } from "../hoc/withTrackClick";
import { ProfileOwnProps, ProfileProps } from "./interface";



const Profile = ({ click, ownerName }: ProfileProps): ReactElement => {
  return (
    <div>
      <h1>Profile component</h1>
      <h1>Owner Name: {ownerName}</h1>
      <h2>Clicks: {click}</h2>
    </div>
  );
}
// Using render props
// export default Profile;

// Using High Order Component
export default withTrackClick<ProfileOwnProps>(Profile);
