import { useParams, useNavigate } from "react-router-dom";

const Profile = () => {
  const { username } = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <h1>Profile: {username}</h1>
      <button onClick={() => navigate("/")}>Go Home</button>
    </div>
  );
};

export default Profile;