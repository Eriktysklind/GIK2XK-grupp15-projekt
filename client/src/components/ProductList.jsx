import ProductItemSmall from "./ProductItemSmall";
import { getAll } from "../services/productService";
function ProductList() {
    const products = [
        
            {
                id: 1,
                title: "Tracker Targa V-19 WT",
                description: "Targamodellerna har minst sagt rikligt med förvaringsutrymme. Nytt för i år är tillexempel ett generöst fack med plats för hela 14 stycken 3700-serie betesboxar. Spöfack i den breda relingen. Stort stuvfack i durken, fack i insidan av friborden, fack med ryggstöd framför pulpeten, med mera med mera. Du kan med största sannolikhet förvara större delen av din fiskeutrustning i denna båt!",
                price: 450000,
                imageUrl: "https://www.mojoboats.se/wp-content/uploads/2019/12/Tracker-TARGA-V-19-WT-2020-6.jpg",
                createdAt: "2025-03-24T10:12:00.000Z",
                updatedAt: "2025-03-24T00:00:00.000Z"
            },
            {
                id: 2,
                title: "Ranger Z521 BASS",
                description: "För första gången kan vi här i Skandinavien erbjuda Rangers tävlingsbåt nummer ett. Från och med 2022 är att vi erbjuder samtliga Rangers modeller då nu alla är CE-märkta för vår marknad och kan därmed för första gången i Skandinavien erbjuda även som här, den största professionell bassbåten.",
                price: 450000,
                imageUrl: "https://www.mojoboats.se/wp-content/uploads/2022/03/RZ521L_R281_20.jpg",
                createdAt: "2025-03-24T10:12:00.000Z",
                updatedAt: "2025-03-24T00:00:00.000Z"
            },
            {
                id: 3,
                title: "Grizzly 2072 Sportsman",
                description: "Den här modellen upplevs minst sagt galen för oss i Skandinavien men är en typ av båtmodell med jaktplattform som varit vanlig i USA länge. Plattformen är av och på tagbar och fästs med BoatBuckles. Under plattformen sitter 8 LED-strålkastare som drivs av ett bränsleaggregat. Utan plattformen monterad är båten lik 2072 CC.",
                price: 450000,
                imageUrl: "https://www.mojoboats.se/wp-content/uploads/2020/01/Tracker-Grizzly-2072-Sportsman-2020-3.jpg",
                createdAt: "2025-03-24T10:12:00.000Z",
                updatedAt: "2025-03-24T00:00:00.000Z"
            },
            {
                id: 4,
                title: "Nitro ZV21",
                description: "ZV21 är en gigantisk sportfiskebåt med sina 6,58 m längd, och 2,64 m bredd och dryga tons vikt. Motorstyrka på upp till hela 400 hk från Mercury eller 300 hk från Evinrude, godkänd för 6 personer och inbyggd tank på 242 liter gör denna båt till något som klarar det mesta. I de två nya dämpade Z-Core™ seating system-stolarna bakom den dubbelkonsolerna eller heltäckande walk thru-rutan sitter man skyddad mot all typ av väder och sjö.",
                price: 450000,
                imageUrl: "https://www.mojoboats.se/wp-content/uploads/2020/02/Nitro-ZV21-2020-43.jpg",
                createdAt: "2025-03-24T10:12:00.000Z",
                updatedAt: "2025-03-24T00:00:00.000Z"
            }
        
    ];

getAll().then((products) => console.log(products));

    return (
    <ul>
        {products?.length > 0 ? (products.map((product) => (
            <li key={`products_${product.id}`}>
            <ProductItemSmall product={product}/>
            </li>))
            ) : (
                <h3>Kunde ej hämta produkten</h3>
            )}
    </ul>
    );
}

export default ProductList;