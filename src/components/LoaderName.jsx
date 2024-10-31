import { useGSAP } from "@gsap/react";
import React from "react";
import { gsap } from "gsap";

const LoaderName = () => {
	useGSAP(() => {
		const tl = gsap.timeline({ repeat: -1 });
		tl.to("#load-name-big span", {
			duration: 0.8,
			stagger: 0.05,
			color: "#40fd0b",
			animation: "easeOutQuad",
		});
		tl.to("#load-name-big span", {
			duration: 0.8,
			stagger: 0.05,
			color: "white",
			animation: "easeOutQuad",
		});

		const lEase = gsap.parseEase("linear");
		gsap.to("#load-box", {
			duration: 4,
			rotate: 360,
			repeat: -1,
			ease: lEase,
		});
	});
	return (
		<>
			<div
				id="load-box"
				className="size-24 sm:size-32 border border-r-transparent rounded-full flex items-center justify-center"
			>
				<div
					id="load-box"
					className="size-16 sm:size-24 border border-l-transparent rounded-full flex items-center justify-center"
				></div>
			</div>
			<h1
				id="load-name-big"
				className="text-base sm:text-xl absolute text-white"
			>
				<span>A</span>
				<span>k</span>
				<span>a</span>
				<span>s</span>
				<span>h</span>
				<span>&nbsp;</span>
				<span>d</span>
				<span>e</span>
				<span>e</span>
				<span>p</span>
			</h1>
		</>
	);
};

export default LoaderName;
