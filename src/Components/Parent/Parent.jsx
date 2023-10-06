import React, { Component } from "react";
import Child from "../Child/Child";

export default class Parent extends Component {
    state = {
        userName: "Helmy",
        age: 24,
        products: [
            {
                title : "Lenovo Legion 5",
                price : "49000",
                category : "Laptop",
                id: 25435,
                onSale: true,
                count:0
            },
            {
                title : "Samsung A52",
                price : "14000",
                category : "Mobile",
                id: 24354,
                onSale: false,
                count:0
            },
            {
                title : "Mi Note 11",
                price : "49000",
                category : "Mobile",
                id: 56585,
                onSale: false,
                count:0
            },
            {
                title : "Apple Watch",
                price : "10000",
                category : "Smart Watches",
                id: 36548,
                onSale: true,
                count:0
            },
            {
                title : "Airpods",
                price : "8000",
                category : "Headsets",
                id: 25486,
                onSale: true,
                count:0
            },
            {
                title : "Song Of Ice And Fire",
                price : "500",
                category : "Books",
                id: 45343,
                onSale: false,
                count:0
            },
            {
                title : "Song Of Ice And Fire",
                price : "500",
                category : "Books",
                id: 24587,
                onSale: false,
                count:0
            },
            {
                title : "Song Of Ice And Fire",
                price : "500",
                category : "Books",
                id: 36594,
                onSale: true,
                count:0
            },
        ]
    }

    deleteProduct = (productId) => {
        let products = [...this.state.products];
        products = products.filter((product) => product.id != productId);
        this.setState({products: products});
    }

    updateCounter = (productId) => {
        let products = [...this.state.products];
        let product = products.find((product) => product.id == productId);
        product.count++;
        this.setState({products: products});
    }
    render() {
        return <>
            <div className="p-4 bg-dark text-center">
                <div className="container">
                    <div className="row gy-4">
                {this.state.products.map(product => <Child updateCounter = {this.updateCounter} delete = {this.deleteProduct} key={product.id} prodcutDetails={product} />)}
                    </div>
                </div>
            </div>
        </>
    }
}
