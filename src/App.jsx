import { useEffect } from "react";
import { useMoralis } from "react-moralis";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { Layout } from "antd";
import "antd/dist/antd.css";
import "./style.css";
import HomePage from "components/QuickStart";
import Text from "antd/lib/typography/Text";
import rare from "./rare2.png"
const { Header, Footer } = Layout;

const styles = {
  content: {
    justifyContent: "center",
    fontFamily: "Roboto, sans-serif",
    color: "#041836",
    marginTop: "80px",
    padding: "10px",
    textAlign: 'center',
  },
  header: {
    position: "fixed",
    zIndex: 1,
    width: "100%",
    background: "#fff",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontFamily: "Roboto, sans-serif",
    borderBottom: "2px solid rgba(0, 0, 0, 0.06)",
    padding: "0 10px",
    boxShadow: "0 1px 10px rgb(151 164 175 / 10%)",
  },
  headerRight: {
    display: "flex",
    gap: "20px",
    alignItems: "center",
    fontSize: "15px",
    fontWeight: "600",
    textAlign: 'center',
    justifyContent: "center",
  },
};
const App = ({ isServerInfo }) => {
  const { isWeb3Enabled, enableWeb3, isAuthenticated, isWeb3EnableLoading } = useMoralis();

  useEffect(() => {
    if (isAuthenticated && !isWeb3Enabled && !isWeb3EnableLoading) enableWeb3();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated, isWeb3Enabled]);

  return (
    <Layout style={{ height: "100vh", overflow: "auto" }}>
      <Router>
        <Header style={styles.header}>
          <div style={{width:"250px"}}>
          <Logo />
          </div>
          <img src={rare} alt="" style={{height:"50px"}}/>
          <div style={{display:"flex"}}>
          </div>
        </Header>

        <div style={styles.content}>
          <Switch>
            <Route exact path="/homepage">
              <HomePage isServerInfo={isServerInfo} />
            </Route>
            <Route path="/">
              <Redirect to="/homepage" />
            </Route>
            <Route path="/ethereum-boilerplate">
              <Redirect to="/homepage" />
            </Route>
          </Switch>
        </div>
      </Router>
    </Layout>
  );
};

export const Logo = () => (
  <div style={{ display: "flex" }}>

  </div>
);

export default App;
