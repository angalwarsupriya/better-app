import React from 'react';
import './index.css';

const footerbetterdata = [
  {
    title: "Mortgage", des: 'We can’t wait to say “Welcome home.” Apply 100% online, with expert customer support.' },
  {title:"Real Estate", des:'Connect with a local Better Real Estate Partner Agent to find out all the ways you can save.'},
  {title:"Cover", des:'Shop, bundle, and save on insurance coverage for home, auto, life, and more.'},
  {title:"Inspect", des:'Get free repair estimates, 24-hour turnarounds on reports, and rest easy with our 100-day inspection guarantee.'},
  {title:"Settlement Services", des:'Get transparent rates when you shop for title insurance all in one convenient place'}
]
const footerData = [
  {
    title: "Resources",
    items: [
      "Home affordability calculator",
      "Mortgage calculator",
      "Free mortgage calculator",
      "Mortgage calculator with taxes",
      "Mortgage calculator with PMI",
      "Rent vs buy calculator",
      "HELOC payment calculator",
      "HELOC vs cash-out refinance calculator",
      "Buy a home",
      "Sell a home",
      "Get home inspection"
    ]
  },
  {
    title: "Company",
    items: [
      "About Us",
      "Careers",
      "Media",
      "Partner With Us",
      "Learning center",
      "FAQs",
      "Investor Relations"
    ]
  },
  {
    title: "Contact Us",
    items: [
      "hello@better.com",
      "415-523-8837",
      "FAQ",
      "Glossary"
    ]
  },
  {
    title: "Legal",
    items: [
      "NMLS Consumer Access",
      "Privacy Policy",
      "Terms of Use",
      "Disclosures & Licensing",
      "Affiliated Business",
      "Browser Disclaimer"
    ]
  }
];

const Footer = () => {
  return (
    <footer className="footer-container">
      <h6 className='hea'>Better</h6>
      <p className='p'>Better is a family of companies serving all your homeownership needs.</p>
      <div className='footer-sec-con'>
      <ul className='ull'>
          {footerbetterdata.map((item, ind) => (
            <li>
              <h6 className='h6'><span className='b-span'>Better</span>{item.title}</h6>
              <p className='p'>{item.des}</p>
            </li>
        ))}  
      </ul>
      {footerData.map((section, index) => (
        <div key={index} className="footer-section">
          <h3>{section.title}</h3>
          <ul>
            {section.items.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
      </div>
      <div className="footer-bottom">
        <p>© 2025 Better.com. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
