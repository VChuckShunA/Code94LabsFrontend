import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './App.css';
import { Layout,Input,Button } from 'antd';
import { SearchOutlined, StarFilled } from '@ant-design/icons';
const { Header, Footer, Content } = Layout;

function App() {
  
  return (
    <Layout>
      <Header > Header </Header>
      <Content>
        <Input placeholder="Search for products" >
      </Input>
      <Button type="primary" shape='round' icon={<SearchOutlined />}>
            Search
          </Button>

           <Button type="primary" >
          New Product
        </Button>
        <Button type="primary" icon={<StarFilled />}  />
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  );
}

export default App;
