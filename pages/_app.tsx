import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import Layout from "../components/layout";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Layout />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
