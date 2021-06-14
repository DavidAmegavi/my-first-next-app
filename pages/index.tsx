import styles from "../styles/Home.module.css";
import React from "react";
import Link from "next/Link";
import Layout from "../components/layout";

export default function Home() {
  return (
    <div className="container">
      <h2>Welcome</h2>
      <div>
        <a href="/blog/first-article">Article 1</a>
      </div>
      <div>
        <a href="/blog/second-article"> Article 2</a>
      </div>
    </div>
  );
}
