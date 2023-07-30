import { Card, Col, Row } from 'antd';
import React from 'react';
const Cards = () => (
    <Row gutter={16}>
        <Col span={8}>
            <Card title="MacBook Pro ">
                <img src='https://www.macworld.com/wp-content/uploads/2023/01/apple-macbook-family-1.jpg?quality=50&strip=all' alt='' style={{width: '100%',
                    height: '100%'}}/>
            </Card>
        </Col>
        <Col span={8}>
            <Card title="IPhone 14 PRO MAX">
                <img src='https://shop.mts.ru/upload/images/smartfon-apple-iphone-14-pro-max-1.jpg' alt='' style={{width: '100%',
                height: '100%'}}/>
            </Card>
        </Col>
    </Row>
);
export default Cards;