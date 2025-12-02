
import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../styles/styles";

const DropDown = ({ categoriesData, setDropDown }) => {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    navigate(`/products?category=${category.title}`);
    setDropDown(false);
    // Optional: You can remove reload if your route updates dynamically
    window.location.reload();
  };

  return (
    <div
      className="absolute top-[100%] left-0 w-[250px] sm:w-[270px] bg-white 
      shadow-lg rounded-b-md z-30 border border-gray-100 animate-fadeIn"
    >
      {categoriesData && categoriesData.length > 0 ? (
        categoriesData.map((category, index) => (
          <div
            key={index}
            onClick={() => handleCategoryClick(category)}
            className={`flex items-center px-3 py-2 hover:bg-gray-100 
            cursor-pointer transition-all duration-200 ${styles.normalFlex}`}
          >
            <img
              src={category.image_Url}
              alt={category.title}
              className="w-[28px] h-[28px] object-contain mr-3 select-none"
              draggable={false}
            />
            <h3 className="text-gray-700 text-[15px] sm:text-[16px] font-medium select-none">
              {category.title}
            </h3>
          </div>
        ))
      ) : (
        <p className="text-center py-3 text-gray-500 text-sm">
          No categories available
        </p>
      )}
    </div>
  );
};

export default DropDown;
