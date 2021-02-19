import React, {useState} from "react";
import {Col, Container, Form, Row, Button} from "react-bootstrap";
import {connect} from "react-redux";
import {AddTask} from "../actions";

const InputForm = ({addTask}) =>{
    const [text, setText] = useState('');
    let [counter, setCounter] = useState(0)
    return(
        <Container>
            <Row className={'mt-5'}>
                <Col>
                </Col>
                <Col xs={6}>
                    <Form>
                        <Form.Group>
                            <Row className="justify-content-md-center">
                                <Col>
                                    <Form.Control type="text" placeholder="Title" value={text} onChange={(e)=>setText(e.target.value)}/>
                                </Col>
                                <Col xs lg="2">
                                    <Button onClick={()=>{
                                        addTask(counter, text, false);
                                        setCounter(counter + 1);
                                        setText('')
                                    }}>
                                        Add
                                    </Button>
                                </Col>
                            </Row>
                        </Form.Group>
                    </Form>
                </Col>
                <Col>
                </Col>
            </Row>
        </Container>
    )
};

export const CInputForm = connect(null, {addTask : AddTask})(InputForm);