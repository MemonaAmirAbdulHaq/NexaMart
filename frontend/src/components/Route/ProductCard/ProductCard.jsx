
import React, { useEffect, useState } from "react";
import {
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineEye,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";
import { useDispatch, useSelector } from "react-redux";
import ProductDetailsCard from "../ProductDetailsCard/ProductDetailsCard";
import { addToWishlist, removeFromWishlist } from "../../../redux/actions/wishlist";
import { addTocart } from "../../../redux/actions/cart";
import { toast } from "react-toastify";
import Ratings from "../../Products/Ratings";

const ProductCard = ({ data, isEvent }) => {
  const { wishlist } = useSelector((state) => state.wishlist);
  const { cart } = useSelector((state) => state.cart);
  const [click, setClick] = useState(false);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setClick(wishlist?.some((i) => i._id === data._id));
  }, [wishlist, data._id]);

  const removeFromWishlistHandler = () => {
    setClick(false);
    dispatch(removeFromWishlist(data));
  };

  const addToWishlistHandler = () => {
    setClick(true);
    dispatch(addToWishlist(data));
  };

  const addToCartHandler = () => {
    const isItemExists = cart?.some((i) => i._id === data._id);
    if (isItemExists) {
      toast.error("Item already in cart!");
    } else if (data.stock < 1) {
      toast.error("Product stock limited!");
    } else {
      dispatch(addTocart({ ...data, qty: 1 }));
      toast.success("Item added to cart successfully!");
    }
  };

  return (
    <>
      <div className="w-full h-[370px] sm:h-[400px] md:h-[420px] bg-white rounded-lg shadow-sm p-3 relative cursor-pointer hover:shadow-lg transition-shadow duration-300">
        <Link
          to={isEvent ? `/product/${data._id}?isEvent=true` : `/product/${data._id}`}
        >
          <img
            src={data.images?.[0]?.url}
            alt={data.name}
            className="w-full h-[170px] sm:h-[200px] object-contain"
          />
        </Link>

        <Link to={`/shop/preview/${data.shop._id}`}>
          <h5 className={styles.shop_name}>{data.shop.name}</h5>
        </Link>

        <Link
          to={isEvent ? `/product/${data._id}?isEvent=true` : `/product/${data._id}`}
        >
          <h4 className="pb-3 font-medium">
            {data.name.length > 40 ? data.name.slice(0, 40) + "..." : data.name}
          </h4>

          <div className="flex items-center">
            <Ratings rating={data?.ratings} />
          </div>

          <div className="py-2 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <h5 className={styles.productDiscountPrice}>
                {data.discountPrice}$ 
              </h5>
              {data.originalPrice > 0 && (
                <h4 className={styles.price}>{data.originalPrice}$</h4>
              )}
            </div>
            <span className="font-normal text-[15px] text-[#68d284]">
              {data.sold_out} sold
            </span>
          </div>
        </Link>

        {/* Side Options */}
        <div>
          {click ? (
            <AiFillHeart
              size={22}
              className="absolute right-2 top-5 cursor-pointer"
              onClick={removeFromWishlistHandler}
              color="red"
              title="Remove from wishlist"
            />
          ) : (
            <AiOutlineHeart
              size={22}
              className="absolute right-2 top-5 cursor-pointer"
              onClick={addToWishlistHandler}
              color="#333"
              title="Add to wishlist"
            />
          )}
          <AiOutlineEye
            size={22}
            className="absolute right-2 top-14 cursor-pointer"
            onClick={() => setOpen(!open)}
            color="#333"
            title="Quick view"
          />
          <AiOutlineShoppingCart
            size={25}
            className="absolute right-2 top-24 cursor-pointer"
            onClick={addToCartHandler}
            color="#444"
            title="Add to cart"
          />
          {open && <ProductDetailsCard setOpen={setOpen} data={data} />}
        </div>
      </div>
    </>
  );
};

export default ProductCard;
