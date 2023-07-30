import React from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { Button, Tooltip, Space } from 'antd';
const SearchButton = () => (
    <Space direction="vertical">
        <Space wrap>
        </Space>
        <Space wrap>
            <Tooltip title="search">
                <Button shape="circle" icon={<SearchOutlined />} />
            </Tooltip>
            <Button icon={<SearchOutlined />}>Clear</Button>
        </Space>
    </Space>
);
export default SearchButton;