import React, { useEffect } from "react";
import DefaultLayout from "../components/DefaultLayout";
import axios from "axios";
import { useState } from "react";
import { Row, Col } from 'antd';
import Item from '../components/item'
import '../resources/items.css'
import { useDispatch } from "react-redux";

function Homepage() {
  const [itemsData, setItemsData] = useState([]);
  const dispatch = useDispatch()
  const getAllItems = () => {
    dispatch({type:'showLoading'})
    axios
      .get("/api/items/get-all-items")
      .then((response) => {
        dispatch({type:'hideLoading'})
        setItemsData(response.data);
      })
      .catch((error) => {
        dispatch({type:'hideLoading'})
        console.log(error);
      });
  };

  useEffect(() => {
    getAllItems();
  }, []);

  return (
    <DefaultLayout>
      <Row gutter={20}>{itemsData.map((item,i) => { 
          return <Col key={i} xs={24} lg={6} md={12} sm={6}>
             <Item item={item} />
          </Col>
      })}</Row>
    </DefaultLayout>
  );
}
export default Homepage;
