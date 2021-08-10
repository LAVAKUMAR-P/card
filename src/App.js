import logo from './logo.svg';
import './App.css';
import PriceCard from './pricecard';

//json for text in card content
let data=[
  {
    planname:"Free",
    price:"$0",
    line1:"✔ Single User",
    line2:"✔ 5GB Storage",
    line3:"✔ Unlimited Public Projects",
    line4:"✔ Community Access",
    line5:"✖ Unlimited Private Projects",
    line6:"✖ Dedicated Phone Support",
    line7:"✖ Free Subdomain",
    line8:"✖ Monthly Status Reports",
  },
  {
    planname:"PLUS",
    price:"$9",
    line1:"✔ 5 Users",
    line2:"✔ 5GB Storage",
    line3:"✔ Unlimited Public Projects",
    line4:"✔ Community Access",
    line5:"✔ Unlimited Private Projects",
    line6:"✔ Dedicated Phone Support",
    line7:"✔ Free Subdomain",
    line8:"✖ Monthly Status Reports",
  },
  {
    planname:"PRO",
    price:"$49",
    line1:"✔ Single User",
    line2:"✔ 5GB Storage",
    line3:"✔ Unlimited Public Projects",
    line4:"✔ Community Access",
    line5:"✔ Unlimited Private Projects",
    line6:"✔ Dedicated Phone Support",
    line7:"✔ Free Subdomain",
    line8:"✔ Monthly Status Reports",
  },
 
]

function App() {
  return (
    <div className='container'>
      <div className='row'>
      <PriceCard cardData={data[0]}></PriceCard>
      <PriceCard cardData={data[1]}></PriceCard>
      <PriceCard cardData={data[2]}></PriceCard>
      </div>
    </div>
    
  );
}

export default App;
