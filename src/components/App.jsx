import React from 'react'
import Header from './Header'
import Head from "next/head";

const App = ({ children }) => (
  <main>
      <Head>
          <title>Eric Newton - Ramblings</title>
          <link rel="stylesheet" href="https://bootswatch.com/4/minty/bootstrap.min.css"/>
          <link rel="stylesheet" href="../public/styles.css"/>
      </Head>
      <Header/>
    {children}
  </main>
)

export default App
