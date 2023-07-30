import { DatePicker, Space } from 'antd';
import React from 'react';
const onChange = (date, dateString) => {
    console.log(date, dateString);
};
const Datepicker = () => (
    <Space direction="vertical">
        <DatePicker onChange={onChange} />
        <DatePicker onChange={onChange} />
    </Space>
);
export default Datepicker;