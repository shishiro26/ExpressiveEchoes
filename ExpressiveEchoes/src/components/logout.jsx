import { useNavigate } from "react-router-dom";

function Logout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.clear();
    navigate("/");
    window.location.reload(true);
  };

  return <button onClick={handleLogout}>Logout</button>;
}

export default Logout;
