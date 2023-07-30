import React from 'react';
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import { Card, Col, Row, Statistic } from 'antd';
const InCard = () => (
    <Row gutter={16}>
        <Col span={12}>
            <Card bordered={false}>
                <Statistic
                    title="Фильм"
                    value={11.282}
                    precision={2}
                    valueStyle={{
                        color: '#3f8600',
                    }}
                    prefix={<ArrowUpOutlined />}
                    suffix="%"
                />
            </Card>
        </Col>
        <Col span={12}>
            <Card bordered={false}>
                <Statistic
                    title="Оценка"
                    value={9.3}
                    precision={2}
                    valueStyle={{
                        color: '#cf1322',
                    }}
                    prefix={<ArrowDownOutlined />}
                    suffix="%"
                />
            </Card>
        </Col>
    </Row>
);
export default InCard;