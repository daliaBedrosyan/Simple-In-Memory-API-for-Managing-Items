import { Request, Response } from "express";
import { products } from "../data/products";

let nextId = products.length + 1;

export const getAllProducts = async (req: Request, res: Response) => {
    try {
        res.status(200).json(products);
    } catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

export const postProduct = async (req: Request, res: Response): Promise<any> => {
    try {
        const { name, price } = req.body;

        if (!name || !price) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const newProduct = {
            id: nextId++,
            name,
            price,
        };

        products.push(newProduct);
        return res.status(201).json(newProduct);
    } catch (error) {
        console.error("Error posting product:", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};
