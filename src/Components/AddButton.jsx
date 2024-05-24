const AddButton = ({ onClick }) => {
  return (
    <>
      <div className="button col-5">
        <button className="btn" onClick={onClick}>
          Add to cart
        </button>
      </div>
    </>
  );
};
// export default AddButton;
// const AddButton = ({ onClick }) => {
//     return (
//       <button className="btn" onClick={onClick}>
//         Add to cart
//       </button>
//     );
//   };
export default AddButton;
