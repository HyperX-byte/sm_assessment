import React from 'react'
import { Button } from 'react-bootstrap'
/**
* @author
* @function CustomButton
**/

export const CustomButton = (props) => {
  return(
    <Button type="submit" style={{ backgroundColor:'#61acb3',margin:'5px', border:'none', borderRadius:'25px', width:'100%' }}>{props.value}</Button>
   )

 }