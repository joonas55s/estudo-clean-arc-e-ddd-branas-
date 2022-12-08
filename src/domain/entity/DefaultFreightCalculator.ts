import FreigthCalculator from "./FreigthCalculator";
import Item from "./Item";

export default class DefaultFreightCalculator implements FreigthCalculator {
    calculate(item:Item){
        if(!item.length || !item.weith || !item.width) return 0
        const freight = (1000 * item.getVolume() * (item.getDensity() / 100))
        const mintFreight = 10
        return Math.max(mintFreight,freight)
    }
}