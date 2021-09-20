import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
        Small group, around 6 participants, we combined trainer with motivation!!
        </p>
        <p className='footer-subscription-text'>
          You follow up in the below social platform.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Like Limitless</Button>
          </form>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <a href='/sign-up'>How it works</a>
            <a href="https://m.facebook.com/%D7%90%D7%9C%D7%99%D7%9F-%D7%92%D7%A8%D7%99%D7%A0%D7%91%D7%A8%D7%92-%D7%A1%D7%98%D7%95%D7%93%D7%99%D7%95-Limitless-101095351299974/">Testimonials</a>
            <a href='/'>Careers</a>
            <Link to='/'>Investors</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/contact'>Contact</Link>
            <Link to='/  background-image: url(./images/gym.jpg);'>Support</Link>
            <Link to='/'>Destinations</Link>
            <Link to='/'>Sponsorships</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Videos</h2>
            <a href="https://m.facebook.com/%D7%90%D7%9C%D7%99%D7%9F-%D7%92%D7%A8%D7%99%D7%A0%D7%91%D7%A8%D7%92-%D7%A1%D7%98%D7%95%D7%93%D7%99%D7%95-Limitless-101095351299974/">Submit Video</a>
            {/* <Link to='/'>Ambassadors</Link> */}
             <a href="https://www.instagram.com/elin.limitless">Services</a> 
            {/* <Link to='/'>Influencer</Link> */}
          </div>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <a href="https://instagram.com/elin.limitless">Instagram</a>
            <a href="https://m.facebook.com/101095351299974/photos/a.127285852014257/563431885066316/?type=3&source=48&__tn__=EH-R">Facebook</a>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
             limitless
              {/* <i class='fab fa-typo3' /> */}
            </Link>
          </div>
          <small class='website-rights'>limitless © 2021</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
