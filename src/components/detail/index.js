import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Layout, Button, Empty, Image, Col, Row } from 'antd';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { GlobalActions } from '../../redux/rootActions';

const { Header, Footer, Sider, Content } = Layout;

export default function Detail(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const detail = useSelector(state => state.GlobalReducer.detail);

  useEffect( ()=>{
    fetchDetail(props.id);
  },[])
  
  const getDetail = async (idDrink) => {
    let data = {};
    const url = `https://thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`;
    axios.get(url)
      .then(
        async (response) => {
          data = response.data.drinks[0];
          dispatch(GlobalActions.fetchDetailData(data));
          console.log(response.data.drinks[0]);
        }
      )
  }

  const fetchDetail = async (idDrink) => {
    dispatch(GlobalActions.setLoading(1))
    await getDetail(idDrink);
    dispatch(GlobalActions.setLoading(0))
  }

  return (
    <Layout>
      <Header>
          <Row justify="space-between" align="middle" >
              <Col span={6} >
                  <Button type="primary" onClick={() => navigate('/')}>back</Button>
              </Col>
              <Col span={18}>
                  <h2 style={{ color: 'white' }}>Detail list Cooktail</h2>
              </Col>
          </Row>
      </Header>
      <Content>
          {
            <Row justify="center">
                <Col span={8}>
                    <h3> {detail?.idDrink}- {detail?.strCategory} </h3>
                </Col>
                <Col>
                    <Image
                        width={200}
                        src={detail?.strDrinkThumb}
                    />
                </Col>
                <Col>
                  <h3>{detail?.strIngredient1},{detail?.strIngredient2},{detail?.strIngredient3}</h3>
                </Col>
            </Row>
          }
      </Content>
    </Layout>
  )
}
