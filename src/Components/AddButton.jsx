const AddButton = ({ onClick }) => {
  return (
    <>
      <div className="button col-5">
        <h6
          className="cart-button"
          onClick={onClick}
          style={{ cursor: "pointer" }}
        >
          +Add to cart
        </h6>
      </div>
    </>
  );
};

export default AddButton;
