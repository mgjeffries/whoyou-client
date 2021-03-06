import React, { useContext, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Logo from "../../images/logo192.png";
import { Button, FormControl, Image } from "react-bootstrap";
import { UserContext } from "../user/UserProvider";

export const NavBar = () => {
  const history = useHistory();
  const { thisUser, getUsers } = useContext(UserContext);

  useEffect(() => {
    getUsers();
  }, []);

  const getAvitarImage = () => {
    if (thisUser) {
      if (thisUser.profile_image_path !== null) {
        return thisUser.profile_image_path;
      }
    }
    return Logo;
  };

  return (
    <Navbar expand="md">
      <Navbar.Brand
        as={Link}
        to={`/users/${localStorage.getItem("whoyou_user_id")}`}
      >
        <Image
          className="navbar__logo"
          src={getAvitarImage()}
          alt="WhoYou"
          width="50%"
          rounded
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav container ">
        <Nav className="mr-auto container-fluid">
          <Button
            variant="outline-primary"
            className="mx-2 my-1"
            onClick={() => history.push("/users")}
          >
            users
          </Button>
          <Button
            variant="outline-primary"
            className="mx-2 my-1"
            onClick={() => history.push("/notifications")}
          >
            notifications
          </Button>
          <Button
            variant="outline-primary"
            className="mx-2 my-1 ml-md-auto"
            onClick={() => {
              localStorage.removeItem("whoyou_user_id");
              localStorage.removeItem("whoyou_user_token");
              history.push("/login");
            }}
          >
            Logout
          </Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
