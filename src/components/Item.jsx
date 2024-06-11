import React from 'react'
import { GrUpdate } from "react-icons/gr";
import { MdDelete } from "react-icons/md";

export default function Item(props) {
    return (
        <>
            <div className="container text-center single_item">
                <div className="row">
                    <div className="col">
                        {props.item_name}
                    </div>
                    <div className="col">
                        {props.item_date}
                    </div>
                    <div className="col">
                        <button type='button' className={`btn btn-danger`} onClick={() => {
                            props.del(props.id);
                        }}><MdDelete /></button>
                    </div>
                    <div className="col">
                        <button type='button' className={`btn btn-danger`} onClick={() => {
                            props.update(props.id);
                        }}><GrUpdate /></button>
                    </div>
                </div>
            </div>
        </>
    )
}
