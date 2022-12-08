import FreigthCalculator from "./FreigthCalculator";
import Item from "./Item";

export default class FixedFreigthCalculator implements FreigthCalculator {
    calculate(item:Item){
        return 10
    }
}