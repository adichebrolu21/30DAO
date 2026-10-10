// Sample price service. Replace getPrices() with a real source (partner feed, own scraper, paid API).
const BASE={oats:190,milk:68,banana:48,egg:90,bread:50,paneer:95,rice:420,dal:170,atta:260,chicken:150,fish:190,tomato:30,onion:40,spinach:25,potato:38,curd:38,peanut:95,poha:48,besan:62,veg:45,oil:150,chana:80,apple:120,soya:45,batter:90,rava:45};
const STORES={Blinkit:1.08,Zepto:1.06,BigBasket:1,'Local supermarket':0.92};
const hash=s=>{let h=0;for(const c of s)h=(h*31+c.charCodeAt(0))>>>0;return h};
async function getPrices(){
  const out={};
  for(const [store,f] of Object.entries(STORES)){out[store]={};for(const [i,b] of Object.entries(BASE))out[store][i]=Math.round(b*f*(1+((hash(i+store)%13)-6)/100))}
  return out;
}
export async function GET(){
  return Response.json({source:'sample',prices:await getPrices()},{headers:{'Cache-Control':'public, s-maxage=600'}});
}
