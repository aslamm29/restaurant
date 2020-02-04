import { h, app } from 'hyperapp';

export default function Footer({ state, actions }) {
	return (
		<footer>
			<div class="container">
				<nav class="menu">
					<a href="#OurStory">Our Story</a>
					<a href="#Reviews">Reviews</a>
					<a href="#SpecialMenu">Special Menu</a>
					<a href="#ContactUs">Contact Us</a>
				</nav>

				<ul class="social-media">
					<li>
						<a href="http://www.facebook.com" target="new">
							<i class="fab fa-facebook-square"></i>
						</a>
					</li>
					<li>
						<a href="http://www.twitter.com" target="new">
							<i class="fab fa-twitter"></i>
						</a>
					</li>
					<li>
						<a href="http://www.google.com" target="new">
							<i class="fab fa-google-plus-g"></i>
						</a>
					</li>
					<li>
						<a href="http://www.youtube.com" target="new">
							<i class="fab fa-youtube"></i>
						</a>
					</li>
				</ul>

				<div class="copyright">© 2020 Copyright</div>
			</div>
		</footer>
	);
}
