function RemoveButton({ onClick }) {
  return (
    <>
      <div className="button remove-button col-5 ">
        <h6 className=" remove-item-button" onClick={onClick}>
          -Remove from cart
        </h6>
        {/* <button className="btn remove-item-button" onClick={onClick}>
          Remove from cart
        </button> */}
      </div>
    </>
  );
}
export default RemoveButton;
