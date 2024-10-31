import { useGSAP } from "@gsap/react";
import React from "react";
import { gsap } from "gsap";

const Loading = () => {
	useGSAP(() => {
		const tl = gsap.timeline({ repeat: -1 });
		tl.to("#load-name-big span", {
			duration: 0.5,
			stagger: 0.05,
			color: "#40fd0b",
			animation: "easeOutQuad",
		});
		tl.to("#load-name-big span", {
			duration: 0.5,
			stagger: 0.05,
			color: "white",
			animation: "easeOutQuad",
		});

		const lEase = gsap.parseEase("linear");
		gsap.to("#load-box", {
			duration: 5,
			rotate: 360,
			repeat: -1,
			ease: lEase,
		});
		gsap.to("#front-box > div", {
			duration: 1.5,
			opacity: 0,
			stagger: 0.01,
			animation: "easeOutQuad",
		});
	});
	return (
		<div className="w-full h-[calc(100vh-60px)] bg-gradient-to-l to-customeDark-500 from-customeDark-600 text-white flex justify-center items-center relative z-40 overflow-hidden">
			<div className="flex justify-center items-center relative z-50 -translate-y-12">
				<div
					id="load-box"
					className="size-56 sm:size-64 border border-r-transparent rounded-full flex items-center justify-center"
				>
					<div
						id="load-box"
						className="size-48 sm:size-56 border border-b-transparent rounded-full flex items-center justify-center"
					></div>
				</div>
				<h1
					id="load-name-big"
					className="text-4xl sm:text-5xl absolute"
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
			</div>
			<div
				id="front-box"
				className="flex flex-wrap absolute h-full w-full top-0 left-0"
			>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
				<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
			</div>
		</div>
	);
};

export default Loading;
