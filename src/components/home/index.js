import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { Layout, Button, Row, Col, Image } from 'antd';
import 'antd/dist/antd.css';
import { useNavigate } from 'react-router-dom';

import { GlobalActions } from '../../redux/rootActions';
import Api from '../../api';
import Loading from '../loading';

const { Header, Footer, Sider, Content } = Layout;

export default function Home(props) {
  const [user, setUser] = useState('admin');
  const [pass, setPass] = useState('admin');
  const [isLoading, setIsloading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loading = useSelector(state => state.GlobalReducer.loading);
  const cooktails = useSelector(state => state.GlobalReducer.cooktails);
  const count = useSelector(state => state.GlobalReducer.count);

  const setIsLogin = () => {
    // setIsloading(true);
    setTimeout(() => {
      //setIsloading(false);
      props.setIsLoginFalse();
    }, 3000);
  }

  useEffect(() => {
    fetchCooktail()
  }, [])

  const fetchCooktail = async () => {
    console.log(loading);
    dispatch(GlobalActions.setLoading(1))
    await getAll();
    dispatch(GlobalActions.setLoading(0))
    // setTimeout(()=> {    dispatch(GlobalActions.setLoading(0))
    // }, 3000)
    console.log("out" + loading + " : " + cooktails);
  }

  const getAll = async () => {
    let data = [];
    const url = 'https://thecocktaildb.com/api/json/v1/1/search.php?f=a';
    axios.get(url)
      .then(
        async (response) => {
          data = response.data.drinks;
          console.log(response.data.drinks);
          dispatch(GlobalActions.fetchData(data));
        }
      )
      .catch(error => console.error(error));
  }

  const getDetail = async (idDrink) => {
    let data = {};
    const url = `https://thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`;
    axios.get(url)
      .then(
        async (response) => {
          debugger
          data = response.data.drinks;
          console.log(response.data.drinks);
          dispatch(GlobalActions.fetchDetailData(data));
        }
      )
  }

  const fetchDetail = async (idDrink) => {
    dispatch(GlobalActions.setLoading(1))
    await getDetail(idDrink);
    dispatch(GlobalActions.setLoading(0))
  }

  const addToCart = (e) => {
    dispatch(GlobalActions.addToCart(e));
    alert('Đã thêm vào cart');
  }

  if (loading) {
    return <Loading />;
  } else
    return (
      <div>
        <Layout>
          <Header>
            <Row justify="center" align="middle">
              <Col span={6} >
                <Button type="primary" onClick={() => { setIsLogin() }}>logOut</Button>
              </Col>
              <Col span={12}>
                <h2 style={{ color: 'white', textAlign: 'center' }}>List Cooktail</h2>
              </Col>
              <Col span={6}>
                <Button type="primary" onClick={() => { navigate('/carts') }}>Carts</Button>
              </Col>
            </Row>
          </Header>
          <Content>
            <Col justify="space-between" align="middle" >
            {cooktails?.map((e) => {
              return (
                <Row key={e.idDrink} justify="space-between" align="middle" >
                  <Col span={8}>
                    <h3>{e.idDrink} - {e.strDrink} - {e.strCategory}</h3>
                  </Col>
                  <Col span={8}>
                    <Image 
                      width={200}
                      src={e.strDrinkThumb} />
                  </Col>
                  <Col span={8}>
                    <Button type="primary" onClick={() => navigate('/detail', e.idDrink)}>detail</Button>
                    <Button type="primary" onClick={() => addToCart(e)}>Add To Cart</Button>
                  </Col>
                </Row>
              );
            })}
            </Col>
          </Content>
        </Layout>
      </div>
    )
}
