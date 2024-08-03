import React from 'react';
import { Button, ButtonGroup, Card, CardContent, CardDescription, CardHeader, CardMeta, Image } from 'semantic-ui-react';
import { Activity } from '../../../app/models/activity';

interface Props{
    activity:Activity;
    cancelSelectActivity: () => void;
    openForm: (id : string) => void;
}

export default function AxtivityDetails({activity, cancelSelectActivity, openForm} :Props){
    return(
        <Card fluid>
            <Image src={`/assets/categoryImages/${activity.category}.jpg`}  />
            <Card.Content>
                <CardHeader>{activity.title}</CardHeader>
                <CardMeta>
                <span>{activity.date}</span>
                </CardMeta>
                <CardDescription>
                    {activity.description}
                </CardDescription>
            </Card.Content>
            <CardContent extra>
                <ButtonGroup widths={2}>
                    <Button basic onClick={() =>openForm(activity.id)} color='blue' content='Edit'/>
                    <Button onClick={cancelSelectActivity} basic color='grey' content='Cancel'/>
                </ButtonGroup>
            </CardContent>
        </Card>
    )
}

