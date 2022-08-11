import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import products from '../product'
import { Row, Col, Dropdown } from "react-bootstrap";
import Product from "../components/Product";
import { listProducts, sortProducts } from "../actions/productActions";
import Loader from "../components/Loader";
import Message from "../components/Message";
import SearchBox from "../components/Search";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const productlist = useSelector((state) => state.productList);
  const { loading, error, products } = productlist;
  const SORT_BY_HIGH_TO_LOW = "decending"
  const SORT_BY_LOW_TO_HIGH = "ascending"
  const SORT_BY_RATING = "rating"
  const INITIAL_SORT = "initial"

  useEffect(() => {
    dispatch(listProducts(INITIAL_SORT));
  }, [dispatch]);

  return (
    <>
    <Row className="justify-content-between">
      <h1>Latest Products</h1>
          <Dropdown className="d-inline">
            <Dropdown.Toggle id="dropdown-autoclose-true">
              Sort Product
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => dispatch(listProducts(SORT_BY_HIGH_TO_LOW))}>Price high to low</Dropdown.Item>
              <Dropdown.Item onClick={() => dispatch(listProducts(SORT_BY_LOW_TO_HIGH))}>Price low to high</Dropdown.Item>
              <Dropdown.Item onClick={() => dispatch(listProducts(SORT_BY_RATING))}>Rating</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          </Row>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message varient="danger">{error}</Message>
      ) : (
        <Row>
          <SearchBox />
          {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default HomeScreen;
