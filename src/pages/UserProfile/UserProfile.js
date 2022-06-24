import "./UserProfile.css";

function UserProfile() {
  return (
    <>
      <div className="user-profile-page">
        <div className="user-overview">
          <img
            className="profile-picture"
            src="https://images.unsplash.com/photo-1628563694622-5a76957fd09c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW5zdGFncmFtJTIwcHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80"
            alt="profile"
          />
          <div className="user-profile-data">
            <div className="user-name">
              Megha Pathak
              <img className="user-reach-out" src={""} alt="text" />
            </div>
            <div className="user-follow-data">
              <span className="up301UserPostCount">10 Posts</span>
              <span className="up301UserFollowersCount">10 Followers</span>
              <span className="up301UserFollowingCount">10 Following</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserProfile;
