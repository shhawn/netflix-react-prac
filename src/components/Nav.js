import React, { useEffect, useState } from "react";
import "./Nav.css";

const Nav = () => {
	const [show, setShow] = useState(false);

	// 특정 좌표 이상 스크롤을 하면 검은색 배경으로 변경
	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.scrollY > 50) {
				setShow(true);
			} else {
				setShow(false);
			}
			
			return () => {
				window.removeEventListener('scroll', () => {});
			}
		})
	}, [])

	return (
		<nav className={`nav ${show && "nav_black"}`}>
			<img 
				src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/200px-Netflix_2015_logo.svg.png"
				alt="logo"
				className="nav_logo"
				onClick={() => window.location.reload()}
			/>
			<img 
				src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=826&t=st=1687345241~exp=1687345841~hmac=22fd02f73405a601ddde51c50e2d64fd3632e953974e511005a85abc0d840e86"
				alt="User logged"
				className="nav_avatar"
			/>
		</nav>
  )
}

export default Nav;