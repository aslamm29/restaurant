import { h, app } from 'hyperapp';

export default function Footer({ state, actions }) {
	return (
		<footer>
			<div class="container">
				<nav class="menu">
					<a href="#">Our Story</a>
					<a href="#">Reviews</a>
					<a href="#">Special Menu</a>
					<a href="#">Reservations</a>
					<a href="#">Contact Us</a>
				</nav>

				<ul class="social-media"></ul>

				<div class="copyright">© 2018 Copyright</div>
			</div>
		</footer>
	);
}
