// Sample store lookup. Replace with Google Places or OpenStreetMap Overpass using lat/lng.
export async function GET(req){
  const p=new URL(req.url).searchParams;
  const stores=[
    {id:'Blinkit',type:'quick',eta:'10-15 min'},
    {id:'Zepto',type:'quick',eta:'10-15 min'},
    {id:'BigBasket',type:'slot',eta:'Slot today or tomorrow'},
    {id:'Local supermarket',type:'walk-in',eta:'In person'}
  ];
  return Response.json({source:'sample',lat:p.get('lat'),lng:p.get('lng'),stores});
}
