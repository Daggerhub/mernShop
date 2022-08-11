import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import Loader from "../components/Loader";
import {Link} from 'react-router-dom';

const SearchPage = () => {
  const [searchData, setSearchData] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchSearchProduct = async () => {
    setLoading(true);
    const searchQuery = window.location.href.split("=")[1];
    const searchData = await fetch(
      `http://localhost:5000/api/products/search/${searchQuery}`
    );
    const data = await searchData.json();
    setSearchData(data);
    setLoading(false);
    console.log(data);
  };

  useEffect(() => {
    fetchSearchProduct();
  }, []);

  return (
    <>
      <Link className="btn btn-dark my-3" to="/">
        Go Back
      </Link>

      {loading ? (
        <Loader />
      ) : (
        <Col>
          <Row>
            <Col>{searchData.length} product found</Col>
          </Row>
          <Row>
            {searchData.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
        </Col>
      )}
    </>
  );
};

export default SearchPage;
