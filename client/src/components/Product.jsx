import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteByid, getAllProduct } from "../redux/useSlices/productSlice";
import FormAdd from "./FormAdd";
import FormEdit from "./FormEdit";

export default function Product() {
  const [showAdd, setShowAdd] = useState(false);
  const dispatch = useDispatch();
  const listProduct = useSelector((state) => state.product.data);
    const [showEdit, setShowEdit] = useState(false);
    const [idEdit, setIdEdit] = useState(null);

  useEffect(() => {
    dispatch(getAllProduct());
  }, []);

  // hàm xóa thông tin một product theo id
  const handleDelete = (id) => {
    dispatch(deleteByid(id));
  };

  //  hiển thị form thêm mới
  const handleShowForm = () => {
    setShowAdd(true);
  };

  // ẩn form thêm mới
  const handleCloseForm = () => {
    setShowAdd(false);
  };

  // mở form edit
  const handleShowEdit = (id) => {
      setShowEdit(true);
      setIdEdit(id);
  };
  // đóng form edit
  const handleCloseEdit = (id) => {
      setShowEdit(false);
      
  };

  return (
    <>
      {/* form thêm mới */}
      {showAdd && <FormAdd handleCloseForm={handleCloseForm} />}
      {/* form edit */}
      {showEdit && <FormEdit handleCloseEdit={handleCloseEdit} idEdit={idEdit} />}

      <h1>List Product</h1>
      <button className="btn btn-primary m-3" onClick={handleShowForm}>
        Thêm mới sản phẩm
      </button>
      <table border={1} className="table">
        <thead>
          <tr>
            <th>STT</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>From</th>
            <th colSpan={2}>Option</th>
          </tr>
        </thead>
        <tbody>
          {listProduct.map((product, index) => (
            <tr key={product.id}>
              <td>{index + 1}</td>
              <td>{product.ProductName} </td>
              <td>{product.Price} </td>
              <td>{product.From}</td>
              <td>
                <button
                  className="btn btn-danger "
                  onClick={() => handleShowEdit(product.id)}
                >
                  Sửa
                </button>
              </td>
              <td>
                <button
                  className="btn btn-warning"
                  onClick={() => handleDelete(product.id)}
                >
                  Xóa
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
