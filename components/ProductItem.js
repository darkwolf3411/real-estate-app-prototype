import React from "react";
import st from "./styles/ProductItem.module.scss";
import infoIcon from "../public/images/information.svg";
import rightIcon from "../public/images/right-arrow.svg";
import Link from "next/link";

const ProductItem = ({ data }) => {
  return (
    <div className={st.wrapper}>
      <div className={st.container}>
        <div
          style={{
            background: `no-repeat center/200% url(${data.images[0]})`,
          }}
          className={st.top}
        ></div>
        <div className={st.bottom}>
          <div className={st.left}>
            <div className={st.details}>
              <h1>{data.product}</h1>
              <p>${data.price}</p>
            </div>
            <Link href={`/listing/${data.id}`}>
              <div className={st.buy}>
                <img src={rightIcon} />
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className={st.inside}>
        <div className={st.icon}>
          <img src={infoIcon} />
        </div>
        <div className={st.contents}>
          <table>
            <tr>
              <th>square</th>
              <th>phone</th>
            </tr>
            <tr>
              <td>{data.square}</td>
              <td>{data.phone}</td>
            </tr>
            <tr>
              <th>city</th>
              <th>type</th>
            </tr>
            <tr>
              <td>{data.address.city}</td>
              <td>{data.type}</td>
            </tr>
            <tr>
              <th>garage</th>
              <th>has basement</th>
            </tr>
            <tr>
              <td>{data.garage}</td>
              <td>{data.hasBasement ? "yes" : "no"}</td>
            </tr>
            <tr>
              <th>bedrooms</th>
              <th>amenities</th>
            </tr>
            <tr>
              <td>{data.bedrooms}</td>
              <td>200mm</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
