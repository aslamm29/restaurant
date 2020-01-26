import { h, app } from 'hyperapp';

export default function OurStory({ state, actions }) {
	return (
		<section id="OurStory">
			<div class="container">
				<div class="row">
					<div class="col-md-6">
						<h5 class="comp-title">Our Story</h5>
						<h2>Cooking is the art of adjustment</h2>
						<p>
							Beard meh flexitarian, paleo kitsch meditation dreamcatcher
							typewriter VHS keffiyeh ennui activated charcoal. Deep v tofu
							vaporware, yr vinyl man bun ethical raw denim 3 wolf moon
							affogato. Pinterest fixie bicycle rights tilde quinoa 8-bit
							authentic church-key 3 wolf moon palo santo pitchfork cred.
							Humblebrag cliche occupy hexagon pitchfork butcher. DIY meditation
							schlitz, kinfolk austin skateboard church-key tumeric. Enamel pin
							tattooed mlkshk, photo booth shabby chic mixtape cronut pug keytar
							kombucha polaroid dreamcatcher.
						</p>
						<div class="quote">
							"The best steak in the city of Toronto" -{' '}
							<strong>Thomas Eggsy</strong>
						</div>
						<a href="#" class="reserve-btn">
							Reserve
						</a>
					</div>
					<div class="col-md-6">
						<div class="video-img"></div>
					</div>
				</div>
			</div>
		</section>
	);
}
