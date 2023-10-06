import React, { Component } from "react";

export default class Child extends Component {
    render() {
        let { id, title, price, category, onSale, count } = this.props.prodcutDetails;
    return <>
        <div className="col-md-3">
            <div className="bg-white p-2 text-dark position-relative">
                <h4>{title}</h4>
                <h4>{id}</h4>
                <h4>{price}</h4>
                <h4>{category}</h4>
                {onSale === true?<div className="position-absolute top-0 right-0 bg-danger p-2">
                    Sale
                </div>:""}
                <h4>{count}</h4>
                <button onClick={() => this.props.delete(id)} className="btn btn-danger text-center me-2">Delete</button>
                <button onClick={() => this.props.updateCounter(id)} className="btn btn-primary text-center">Update Count</button>
            </div>
        </div>
    </>;
    }
}
