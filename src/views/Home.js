import React from "react";
import Hero from "../components/Hero";
import Cartao from "../components/Cartao";
import Cards from "../components/Cards";
import Institutional from "../components/Institutional";
import Faq from "../components/Faq";

import posts from "../data/posts";

const Home = ({ handleCreateAcc }) => (
	<>
		<Hero click={handleCreateAcc} />

		<Cartao />

		<Cards posts={posts} click={handleCreateAcc} />

		<Institutional click={handleCreateAcc} />

		<Faq />
	</>
);

export default Home;
