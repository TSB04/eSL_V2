import * as React from "react";
import { List } from "react-native-paper";

const users = [
  { prenom: "Devin" },
  { prenom: "Dan" },
  { prenom: "Dominic" },
  { prenom: "Jackson" },
  { prenom: "James" },
  { prenom: "Joel" },
  { prenom: "John" },
  { prenom: "Jillian" },
  { prenom: "Jimmy" },
  { prenom: "Julie" },
];

const UserList = () => {
  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);

  return (
    <List.Section title="Accordions">
      <List.Accordion
        title="User List"
        left={(props) => <List.Icon {...props} icon="folder" />}
        expanded={expanded}
        onPress={handlePress}
      >
        {users.map((user, index) => (
          <List.Item key={index} title={user.prenom} />
        ))}
      </List.Accordion>
    </List.Section>
  );
};

export default UserList;
