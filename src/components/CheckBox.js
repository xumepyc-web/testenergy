import React from 'react';
import { Checkbox } from 'antd';
const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
};
const CheckBox = () => <Checkbox onChange={onChange}>Checkbox</Checkbox>;
export default CheckBox;