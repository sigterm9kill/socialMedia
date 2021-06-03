import App from "next/app";
import Layout from "../components/Layout/Layout";
import 'semantic-ui-css/semantic.min.css';



// class component because we need to do auth

class MyApp extends App {
    render() {
        const { Component } = this.props;
        return (
            <Layout>
                <Component />
            </Layout>
        );
    }
}

export default MyApp;