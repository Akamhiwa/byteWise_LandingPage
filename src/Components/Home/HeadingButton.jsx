
import SecondaryBtn from "../Buttons/SecondaryBtn";
import PrimaryBtn from "../Buttons/PrimaryBtn";

const HeadingButton = () => {
  const buttonVariants = {
    hover: {
      boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)", // Example of shadow animation on hover
      scale: 1.05, // Example of scale animation on hover
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    tap: {
      scale: 0.95 // Example of scale animation on tap/click
    }
  };

  return (
    <div className="flex items-center justify-center gap-[44px]">
      <PrimaryBtn variants={buttonVariants} UrlPage="/Product">Products</PrimaryBtn>
     <SecondaryBtn variants={buttonVariants} UrlPage="/About">About Us</SecondaryBtn>
    </div>
  );
};

export default HeadingButton;