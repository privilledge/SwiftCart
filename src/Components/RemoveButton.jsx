function RemoveButton({ onClick }) {
  return (
    <>
      <div className="remove-button col-5 ">
        <button className="btn remove-item-button" onClick={onClick}>
          Remove from cart
        </button>
      </div>
    </>
  );
}
export default RemoveButton;
