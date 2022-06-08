import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Layout, Button, Empty, Image, Col, Row } from 'antd';
import { useNavigate } from 'react-router-dom';
import { GlobalActions } from '../../redux/rootActions';

const { Header, Footer, Sider, Content } = Layout;

export default function Carts() {
    const carts = useSelector(state => state.GlobalReducer.carts);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleDeleteCootail = (element) => {
        dispatch(GlobalActions.deleteFromCart(element));
    }

    return (
        <Layout>
            <Header>
                <Row justify="space-between" align="middle" >
                    <Col span={6} >
                        <Button type="primary" onClick={() => navigate('/')}>back</Button>
                    </Col>
                    <Col span={18}>
                        <h2 style={{ color: 'white' }}>List Selected Cooktail</h2>
                    </Col>
                </Row>
            </Header>
            <Content>
                {carts?.map((e) => {
                    return (
                        <Row key={e.idDrink} justify="center">
                            <Col span={8}>
                                <h3> {e.idDrink}- {e.strCategory} </h3>
                            </Col>
                            <Col>
                                <Image
                                    width={200}
                                    src={e.strDrinkThumb}
                                />
                                <Button type='primary' onClick={() => handleDeleteCootail(e)}>delete</Button>
                            </Col>
                        </Row>
                    );
                })}
            </Content>
        </Layout>
    )
}


