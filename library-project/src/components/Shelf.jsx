import React from "react";
import { Link, useLocation } from "react-router-dom";
import { PRODUCTS } from "../utils/constants";

const Copy = () => (
  <p>
    팝업에서 자세한 내용을 확인하려면 책을 클릭하세요. 팝업의 링크를 복사하거나
    붙여넣을 수 있습니다. 링크는 책에 대한 별도의 페이지로 연결됩니다.
  </p>
);

const Shelf = () => {
  const location = useLocation();

  return (
    <div>
      <Copy />
      <p>
        <Link to="/cart" className="btn btn-danger">
          Cart
        </Link>
      </p>
      <div>
        {PRODUCTS.map((p) => (
          <Link
            key={p.id}
            to={{
              pathname: `/products/${p.id}`,
              state: {
                modal: true,
                returnTo: location?.pathname,
              },
            }}
          >
            <img
              src={p.src}
              alt={p.title}
              height="100"
              style={{ margin: 10 }}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Shelf;
