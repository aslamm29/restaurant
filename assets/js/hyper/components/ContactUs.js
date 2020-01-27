import { h, app } from 'hyperapp';

export default function ContactUs({ state, actions }) {
	return (
		<section id="ContactUs" class="textureBG">
			<div class="container">
				<h5 class="comp-title">Contact Us</h5>
				<h2>Always here to help you</h2>
				<div class="box">
					<div class="row">
						<div class="col-md-6">
							<div class="city">Toronto, Ontario</div>
							<h6 class="address">
								435 yonge street <br />
								Greater Toronto Area, M2H562
							</h6>
							<p>
								<strong>Email:</strong>{' '}
								<a href="mailto:info@primesteak.com">info@primesteak.com</a>
							</p>
						</div>
						<div class="col-md-6">Two</div>
					</div>
				</div>
			</div>
		</section>
	);
}
