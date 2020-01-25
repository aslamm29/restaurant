import { h, app } from 'hyperapp';

export default function TopImg({ state, actions }) {
	return (
		<section class="TopImg">
			<div class="title">
				<h5>Welcome</h5>
				<h1>Prime Steak Restaurant</h1>
			</div>
			<div class="contact-info">
				<div class="booking">Book Table Directly</div>
				<h2>(647) - 925 - 7932</h2>
				<div class="hours">
					Opening Hours <strong>Mon - Fri: </strong> 9am - 9pm{' '}
					<strong>Weekend:</strong> 9am - 11pm
				</div>
			</div>
		</section>
	);
}
