import '../styles/globals.css';
import 'antd/dist/antd.css';

import { Layout } from 'antd';

const { Header, Content } = Layout;
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Header />
      <Content style={{ display: 'flex', justifyContent: 'center' }}>
        <Component {...pageProps} />
      </Content>
    </Layout>
  );
}

export default MyApp;
