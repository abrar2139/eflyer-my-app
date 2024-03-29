
import './footer.css';

export function Footer() {
  return (
    <div className='main-footer'>
      <h1 className='eflyer'>Eflyer</h1>
      <div className="emailsub">
      <input type="email"  name='email' placeholder='Your Email' />
       <p>SUBSCRIBE</p>
       </div>
       <hr/>
       <div className="underline">
        <ul>
       <li>Best Sellers</li>
       <li>Gift Ideas</li>
       <li>New Releases</li>
       <li>Today's Deals</li>
       <li>Customer Service</li>
        </ul>
       </div>
        <div className="end">
          <p className='end1'><span>Help Line Number:</span><span>+1180012001200</span></p>
          <p className='end2'><span>&copy;2020 All Rights Reserved.Design by <span/></span> <span> free html Templates</span></p>
        </div>
      </div>
  );
}

