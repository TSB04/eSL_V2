import * as React from "react";
import { useEffect, useState } from "react";
import { List } from "react-native-paper";
import userservice from "../services/userservice";

const UserList = () => {
  const [expanded, setExpanded] = useState(true);
  const [users, setUsers] = useState([]);

  const handlePress = () => setExpanded(!expanded);

  useEffect(() => {
    // axios
    //   .get("http://localhost:4898/user/all")

    userservice
      .getUsers()
      .then((res) => {
        console.log("response", res);
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <List.Section title="Accordions">
      <List.Accordion
        title="User List"
        left={(props) => <List.Icon {...props} icon="folder" />}
        expanded={expanded}
        onPress={handlePress}
      >
        {users?.map((user, index) => (
          <List.Item key={index} title={user.firstName} />
        ))}
      </List.Accordion>
    </List.Section>
  );
};

export default UserList;
