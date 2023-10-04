
let num1 = "tammikuu";
let num2 = "helmikkuu"
let num3 = "maaliskuu";
let num4 = "huuhtikku";
let num5 = "toukukuu";
let num6 = "kesäkuu";
let num7 = "heinäkuu";
let num8 = "elokuu";
let num9 = "syyskuu";
let num10 = "lokakuu";
let num11 = "marraskuu";
let num12 = "joulukuu";

const kuukausi = "maaliskuu";
if (kuukausi === num1 || kuukausi === num3 || kuukausi === num5 || kuukausi === num7 || kuukausi === num8 || kuukausi === num10 || kuukausi === num12) {
    console.log("Tässä kuukaudessa 31 päivää");
}

const kuukausi1 = "marraskuu";
if (kuukausi1 === num4 || kuukausi1 === num6 || kuukausi1 === num9 || kuukausi1 === num11) {
    console.log("Tässä kuukaudessa 30 päivää");
}
const kuukausi2 = "helmikkuu"
if (kuukausi2 === num2) {
    console.log("Tässä kuukaudessa 29 päivää");
}


const kuukausi3 = "tammikuu";
    switch (kuukausi3) {
        case "tammikuu":
            console.log("Tässä kuukaudessa 31 päivää");
            break;
        case "maaliskuu":
            console.log("Tässä kuukaudessa 31 päivää");
            break;
        case "toukukuu":
            console.log("Tässä kuukaudessa 31 päivää");
            break;
        case "heinäkuu":
            console.log("Tässä kuukaudessa 31 päivää");
            break;
        case "elokuu":
            console.log("Tässä kuukaudessa 31 päivää");
            break;
        case "lokakuu":
            console.log("Tässä kuukaudessa 31 päivää");
            break;
        case "joulukuu":
            console.log("Tässä kuukaudessa 31 päivää");
            break;
        case "huuhtikkuu":
            console.log("Tässä kuukaudessa 30 päivää");
            break;
        case "kesäkuu":
            console.log("Tässä kuukaudessa 30 päivää");
            break;
        case "syyskuu":
            console.log("Tässä kuukaudessa on 30 päivää");
            break;
        case "marraskuu":
            console.log("Tässä kuukaudessa on 30 päivää");
            break;
        case "helmikkuu":
            console.log("Tässä kuukaudessa on 28 päivää");
            break;
        default:
            console.log("Unknown language");
    }

