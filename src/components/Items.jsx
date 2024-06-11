import React from 'react'
import Item from './Item'

export default function Items(props) {
    return (
        <>
            {props.ProductList.map((item) => (<Item key={v4()} item_name={item.product} item_date={item.dueDate} del={props.del} update={props.update}/>))}
        </>
    )
}
