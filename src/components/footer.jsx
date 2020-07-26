import React from 'react';

function Footer() {
	return <footer>
		<ul className="footer-ul">
			<li className="footer-item">
				<p className="footer-p">&copy; 2020 GitHub, Inc.</p>
			</li>
			<li className="footer-item">
				<a className="footer-a" href="/">Terms</a>
			</li>
			<li className="footer-item">
				<a className="footer-a" href="/">Privacy</a>
			</li>
			<li className="footer-item">
				<a className="footer-a" href="/">Security</a>
			</li>
			<li className="footer-item">
				<a className="footer-a" href="/">Status</a>
			</li>
			<li className="footer-item">
				<a className="footer-a" href="/">Help</a>
			</li>
		</ul>
		<ul className="footer-ul footer-ul-icon">
			<li className="footer-item">
				<i className="fa fa-github" style={{fontSize: '29px', color: '#959DA5' }}aria-hidden="true"></i>
			</li>
		</ul>
		<ul className="footer-ul">
			<li className="footer-item">
				<a className="footer-a" href="/">Contact GitHub</a>
			</li>
			<li className="footer-item">
				<a className="footer-a" href="/">Pricing</a>
			</li>
			<li className="footer-item">
				<a className="footer-a" href="/">API</a>
			</li>
			<li className="footer-item">
				<a className="footer-a" href="/">Training</a>
			</li>
			<li className="footer-item">
				<a className="footer-a" href="/">Blog</a>
			</li>
			<li className="footer-item">
				<a className="footer-a" href="/">About</a>
			</li>
		</ul>

	</footer>
}

export {Footer}
