import Image from "next/image";
import cartIcon from "../../public/icon-cart.svg";

const AddToCart = () => {
    return (
        <div className="flex bg-dark_cyan py-4 justify-center 
            items-center gap-5 rounded-lg cursor-pointer hover:bg-very_dark_blue">
            <span>
                <Image src={cartIcon} alt=''/>
            </span>
            <span className="text-white font-semibold">
                Add to Cart
            </span>
        </div>
    )
}

export default AddToCart;