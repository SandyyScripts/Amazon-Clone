import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
	return (
		<div className="home">
			<img className="home__image" src="https://cutt.ly/gmn48c4" alt="PRIME" />
			<div className="home__row">
				<Product
					id="12321341"
					title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
					price={299}
					rating={4}
					image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
				/>
				
				<Product
					id="23445930"
					title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
					price={3500}
					rating={5}
					image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
				/>
			</div>

			<div className="home__row">
				<Product
					id="4903850"
					title="Samsung LC49RG90SSUXEN 49' Curved LED Watch"
					price={1599}
					rating={4}
					image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
				/>
				<Product
					id="49538094"
					title="Dell Inspiron D-200 256 SSD Windows 10 Edition"
					price={62999}
					rating={5}
					image="https://techviral.net/wp-content/uploads/2017/11/Best-Laptop-to-Buy-in-November-20171.jpg"
				/>
				<Product
					id="3254354345"
					title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
					price={52999}
					rating={4}
					image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
				/>
			</div>

			<div className="home__row">
				<Product
					id="90829332"
					title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
					price={92500}
					rating={4}
					image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
				/>
			</div>
		</div>
	);
}

export default Home;
