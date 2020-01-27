import { h, app } from 'hyperapp';

export default function Reviews({ state, actions }) {
	return (
		<section id="Reviews">
			<div class="container">
				<div class="row">
					<div class="col-md-8">
						<img src="https://s3.amazonaws.com/tinycards/image/8a924d9d7b6647348734a1ca0fcd9a43" />
					</div>
					<div class="col-md-4">
						<h5 class="comp-title">REVIEWS</h5>
						<h2>The Food Network</h2>
						<h4>"Best Restaurant in the GTA"</h4>
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
						<div class="author">
							<strong>Joe Bastiachi</strong> - winner of the chef masters
						</div>
						<div class="arrows">
							<i class="fas fa-arrow-left"></i>
							<i class="fas fa-arrow-right"></i>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
