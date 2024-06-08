import React from 'react'

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
                            props.del(props.item_name);
                        }}>REMOVE</button>
                    </div>
                    <div className="col">
                        <button type='button' className={`btn btn-danger`} onClick={() => {
                            props.update(props.item_name);
                        }}>UPDATE</button>
                    </div>

                </div>
            </div>
        </>
    )
}
