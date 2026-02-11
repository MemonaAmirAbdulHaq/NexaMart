const styles = {
  // Layout
  custom_container: "w-11/12 hidden sm:block",
  section: "w-11/12 mx-auto",

  // Typography
  heading:
    "text-[27px] text-center md:text-start font-[600] font-roboto pb-[20px] text-[#0f1e3f]",
  productTitle:
    "text-[25px] font-[600] font-roboto text-[#213a56] tracking-tight",
  productDiscountPrice:
    "font-bold text-[18px] text-[#cdaa80] font-roboto tracking-tight",
  price:
    "font-[500] text-[16px] text-slate-400 pl-3 mt-[-4px] line-through",
  shop_name:
    "pt-3 text-[15px] text-[#cdaa80] pb-3 font-medium",

  // Navigation / Active state
  active_indicator:
    "absolute bottom-[-27%] left-0 h-[3px] w-full bg-gradient-to-r from-[#cdaa80] via-[#997953] to-[#cdaa80] rounded-full",

  // Buttons
  button:
    "w-[150px] h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer bg-gradient-to-r from-[#0f1e3f] via-[#213a56] to-[#997953] text-white font-semibold shadow-md hover:shadow-lg transition-transform duration-200 hover:scale-[1.02]",
  cart_button:
    "px-[20px] h-[38px] rounded-[20px] bg-gradient-to-r from-[#cdaa80] to-[#997953] flex items-center justify-center cursor-pointer shadow-sm hover:shadow-md transition duration-200",
  cart_button_text: "text-white text-[16px] font-[600]",

  // Form elements
  input:
    "w-full border border-slate-200 focus:border-[#cdaa80] focus:ring-1 focus:ring-[#cdaa80] p-1 rounded-[5px] outline-none transition duration-150",

  // Status indicators
  activeStatus:
    "w-[10px] h-[10px] rounded-full absolute top-0 right-1 bg-[#cdaa80] ring-2 ring-[#f3e1c2]",

  // Flex helpers
  noramlFlex: "flex items-center",
};

export default styles;