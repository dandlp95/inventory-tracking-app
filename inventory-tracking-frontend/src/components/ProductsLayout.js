import React from 'react';
import EditProductForm from "./EditProductForm";
import DeleteProductForm from "./DeleteProductForm";
import AddProductForm from "./AddProductForm";

function Products(){
    
    async function getProducts(){
        
        const productsList = await fetch(
            "http://localhost:8080/products",
            {
                method: "GET",
                headers:{
                    "Content-Type": "application/json"
                }
            }
        );
    };

    
} 
