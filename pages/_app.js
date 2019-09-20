import React from 'react';
import App, { Container } from 'next/app'
import { Provider } from 'react-redux'
import withRedux from 'next-redux-wrapper'
import { makeStore } from '../components/store'
import Head from 'next/head'
import cookies from 'next-cookies'
import Footer from '../components/fragments/Footer'
import Header from '../components/fragments/Header'
import '../css/app.scss'
import Router from 'next/router'

Router.events.on('routeChangeComplete', () => {
  if (process.env.NODE_ENV !== 'production') {
    const els = document.querySelectorAll('link[href*="/_next/static/css/styles.chunk.css"]')
    const timestamp = new Date().valueOf()
    els[0].href = '/_next/static/css/styles.chunk.css?v=' + timestamp;
  }
})

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}
    let user = null
    const { token } = cookies(ctx)
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
      pageProps.headerHeight = "56px"
      pageProps.footerHeight = "273px"
      pageProps.companyName = "BCA"
      pageProps.cmsLicensed = "Copyright &#169; 2019 PT.Triple One Global."
    }
    try {
      if (typeof token != "undefined") {
        let access_token = JSON.parse(token)
      }
    } catch (e) {
      console.log("Unable to fetch AsyncData on server" + e);
    }
    return { pageProps, token, user }
  }
  constructor(props) {
    super(props)
    this.state = {
      network: true,
      navIsOpen: false,
      navMaxWidth: 239,
      navMinWidth: 55
    }
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this)
  }
  
  updateWindowDimensions() {
    if (window.innerWidth < 768) {
      this.setState({navIsOpen: false})
    } else {
      this.setState({navIsOpen: true})
    }
  }

  componentDidMount() {
    this.updateWindowDimensions()
    window.onload = () => {
      navigator.onLine ? this.setState({ network: true }) : this.setState({ network: false })
      window.addEventListener('online', () => this.setState({ network: true }))
      window.addEventListener('offline', () => this.setState({ network: false }))
    }
  }

  toggleNav = () => this.setState({navIsOpen: !this.state.navIsOpen})

  render() {
    const { Component, pageProps, store } = this.props
    return (
      <div>
        <Head>
          <title>{pageProps.companyName} | Administrator</title>
				</Head>
        <Container>
          <Provider store={store}>
            <Header {...pageProps} {...this.state} onClick={this.toggleNav} />
            <Component {...pageProps} {...this.state} />
            <Footer {...pageProps} {...this.state} />
          </Provider>
        </Container>
      </div>
    )
  }
}

export default withRedux(makeStore)(MyApp)