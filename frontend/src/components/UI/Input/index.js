import React from 'react';
import { Form } from 'react-bootstrap';
import "./style.css"
/**
* @author
* @function Input
**/

export const Input = (props) => {
    return (
        <Form.Group controlId={props.id}>
            <Form.Label>{props.label}</Form.Label>
            <Form.Control style={{ borderTop:'none', borderRadius:'0px', borderLeft:'none',borderRight:'none', borderButtom:'2px solid #61acb3'}}
                type={props.type} 
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.onChange} 
            />
            <Form.Text className="text-muted">
                {props.errorMessage}
            </Form.Text>
        </Form.Group>
    )

}
