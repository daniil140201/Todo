import React from "react";
import {Button, ListGroup} from "react-bootstrap";
import {connect} from "react-redux";
import {DeleteTask, SetCompleted} from "../actions";

const ListItem = ({id, isCompleted, text, onDelete,setCompleted}) =>{
    return(
        <div>
            <ListGroup.Item as={'li'} action variant={'primary'} className={'m-2 listItem'}>
                <div className={'listItem'}>
                    <input type="checkbox" onChange={()=>setCompleted(id)}/>
                    <p className={'listTitle'} style={{textDecoration : isCompleted ? 'line-through' : 'none'}}>
                        {text}
                    </p>
                </div>
                <Button variant={'danger'}  onClick={() => onDelete(id)}>
                    Delete
                </Button>
            </ListGroup.Item>
        </div>
    )
};

export const CListItem = connect(null, {onDelete : DeleteTask, setCompleted : SetCompleted})(ListItem);