import { useAuth0 } from "@auth0/auth0-react";
export const Header = () => {
  const { user, isAuthenticated } = useAuth0();
  return (
    isAuthenticated && (
      <div>
        <h2>{user.email}</h2>
      </div>
    )
  );
};
