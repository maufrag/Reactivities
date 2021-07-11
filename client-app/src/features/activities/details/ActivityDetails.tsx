import React from "react";
import { Button, Card, Icon, Image } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";

interface Props {
  activity: Activity;
  cancelSelectActivity: () => void;
}

export default function ActivityDetails({
  activity,
  cancelSelectActivity,
}: Props) {
  return (
    <Card fluid>
      <Image src={`/assets/categoryImages/${activity.category}.jpg`} />
      <Card.Content>
        <Card.Header>{activity.title}</Card.Header>
        <Card.Meta>
          <span>{activity.date}</span>
        </Card.Meta>
        <Card.Description>{activity.description} </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button.Group widths="2">
          <Button basic color="blue" content="Edit"></Button>
          <Button
            basic
            onClick={cancelSelectActivity}
            color="grey"
            content="Cancel"
          ></Button>
          {/* Como essa função nao tem parametros, nao se utiliza a arrowfunction, caso utilize, não vai funcionarx  */}
        </Button.Group>
      </Card.Content>
    </Card>
  );
}
