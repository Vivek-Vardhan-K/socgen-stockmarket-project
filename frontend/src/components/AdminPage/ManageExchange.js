import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./ManageExchange.css";
function ManageExchange() {
  const Token = useSelector((state) => state.jwtToken);
  const [xList, setxList] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:9999/stock_exchange/get_all", {
        headers: {
          authorization: "Bearer " + Token,
        },
      })
      .then((res) => {
        console.log(res.data);
        setxList(res.data);
      });
  }, []);
  if (xList !== undefined) {
    var newList = xList.map((item, index) => {
      return (
        <div className="comp-hold" key={index}>
          <div className="image-cropper">
            {/* <img src={item.imageLink} className="rounded c-img" /> */}
          </div>
          <h3 className="company-text">{item.name}</h3>
          <h5 className="company-text2x">{item.brief}</h5>

          {/* <Link
              to="/company/edit"
              style={editStyle}
              onClick={() => {
                dispatch({
                  type: "EDIT_COMPANY",
                  cacheComp: item,
                });
              }}
            >
              <Button variant="primary" className="btn-edit">
                Edit
              </Button>
            </Link>
            <Link to="/manage_company">
              <Button
                variant="danger"
                className="btn-delete"
                onClick={() => {
                  deleteHandler(item.id);
                }}
              >
                Delete
              </Button>
            </Link> */}
        </div>
      );
    });
  }
  return (
    <div className="exhold">
      <Link to="/exchange/add_exchange">
        <button className="btn btn-primary btn-exadd">Add Exchange</button>
      </Link>
      {newList}
    </div>
  );
}

export default ManageExchange;