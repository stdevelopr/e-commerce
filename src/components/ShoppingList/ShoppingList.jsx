import ItemCard from "./ItemCard"
import "./ShoppingList.css"

export default function ShoppingList() {
    const shopCart = [1,2,3,4].map(item=> <ItemCard/>)
    return (
        <div className="container">
            {shopCart}
        </div>
    )
}
