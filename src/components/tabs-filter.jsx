import React from 'react';
import { Col, Row, Typography, Dropdown, Menu, Grid } from 'antd';
import { MenuOutlined } from '@ant-design/icons';

const { useBreakpoint } = Grid;

const TabsFilter = ({ activeTab, onChange }) => {
  const tabs = ['All', 'Asia', 'Europe'];
  const screens = useBreakpoint();

  const handleMenuClick = ({ key }) => {
    onChange(key);
  };

  const menu = (
    <Menu onClick={handleMenuClick}>
      {tabs.map(tab => (
        <Menu.Item key={tab}>{tab}</Menu.Item>
      ))}
    </Menu>
  );
  

  return (
    <Row justify="space-between" align="middle">
      <Col span={15}>
        <Typography className="country-header">Countries</Typography>
      </Col>
      <Col span={9} align="end">
        {screens.xs ? (
          <Dropdown overlay={menu} placement="bottomRight" trigger={['click']}>
            <MenuOutlined style={{ fontSize: '20px', cursor: 'pointer' }} />
          </Dropdown>
        ) : (
          <div className="tabs">
            {tabs.map(tab => (
              <span
                key={tab}
                style={{
                  fontWeight: activeTab === tab ? 'bold' : 'normal',
                  textDecoration: activeTab === tab ? 'underline' : 'none',
                  cursor: 'pointer',
                  fontSize: '16px',
                  marginRight: 16
                }}
                onClick={() => onChange(tab)}
              >
                {tab}
              </span>
            ))}
          </div>
        )}
      </Col>
    </Row>
  );
};

export default TabsFilter;
