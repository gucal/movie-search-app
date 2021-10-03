import '../styles/globals.css';
import 'antd/dist/antd.css';

import { Layout } from 'antd';
import Link from 'next/link';

const { Header, Content } = Layout;
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Header>
        <Link href="/">
          <a>
            <span style={{ fontSize: 30, color: '#fff', fontWeight: '600' }}>
              Movie App
            </span>
          </a>
        </Link>
      </Header>
      <Content
        style={{
          background: '#fff',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Component {...pageProps} />
      </Content>
    </Layout>
  );
}

export default MyApp;
