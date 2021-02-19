import React from "react";
import {Col, Container, ListGroup, Row} from "react-bootstrap";
import {CListItem} from "./TaskListItem";

export const TasksList = ({tasks = []}) =>{
    return(
        <Container>
            <Row className={'mt-4'}>
                <Col></Col>
                <Col  sm={7}>
                    <ListGroup as={'ul'}>
                        {tasks.map(task =>
                            <CListItem id={task.id} text={task.text} isCompleted={task.isCompleted} key={task.id}/>
                        )}
                    </ListGroup>
                </Col>
                <Col></Col>
            </Row>
        </Container>
    )
};