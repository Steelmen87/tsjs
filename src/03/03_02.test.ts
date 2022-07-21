import {CiyType} from "../02/02_02";
import {addMoneyToBudget, repairHouse} from "./03";

let city: CiyType;
beforeEach(() => {
    city = {
        title: "",
        houses: [
            {
                buildedAt: 2012,
                repaired: false,
                address:
                    {
                        number: 100,
                        street: {
                            title: "White street"
                        }
                    }
            },
            {
                buildedAt: 2008,
                repaired: false,
                address:
                    {
                        number: 100,
                        street: {
                            title: "Happy street"
                        }
                    }
            },
            {
                buildedAt: 2020,
                repaired: false,
                address:
                    {
                        number: 101,
                        street: {
                            title: "Happy street"
                        }
                    }
            }
        ],
        governmentBuildings: [
            {
                type: "HOSPITAL",
                budget: 200000,
                staffCount: 200,
                address: {
                    number: 180,
                    street: {
                        title: "Central str"
                    }
                }
            },
            {
                type: "FIRE-STATION",
                budget: 500000,
                staffCount: 1000,
                address: {
                    number: 180,
                    street: {
                        title: "South str"
                    }
                }
            },
        ],
        citizensNumber: 1000000
    }
})

test('Budget should be change for Hospital',()=>{
    addMoneyToBudget(city.governmentBuildings[0],1000000);
    expect(city.governmentBuildings[0].budget).toBe(1200000)
})
test('House should be repaired',()=>{
    repairHouse(city.houses[1]);
    expect(city.houses[1].repaired).toBeTruthy();
})