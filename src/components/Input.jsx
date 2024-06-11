import React from 'react'
import styles from './Input.module.css'

export default function Input(props) {

    return (
        <>
            <div className="container text-center">
                <div className="row">
                    <div className="col">
                        <input className={styles.input} type="text" placeholder='Enter task' onChange={props.onChange} value={props.input} />
                    </div>
                    <div className="col">
                        <input className={styles.input} type="date" onChange={props.onChanged} value={props.inputd} />
                    </div>
                    <div className="col">
                        <button type='button' className={`btn btn-success ${styles.style}`} onClick={props.new_add}>  ADD  </button>
                    </div>
                </div>
            </div>
        </>
    )
}
