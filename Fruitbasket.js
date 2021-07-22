import fs from 'fs'
export class Fruitbasket {
    basket
    constructor() {
        this.basket = JSON.parse(fs.readFileSync('input.json'));
    }

    mixedFruits() {
        const rawData = this.basket
        return rawData.map(item => {
            return item.contents
        }).flat()
    }

    uniqueFruits() {
        const data = this.mixedFruits()
        const unique = [...new Set(data.map(item => item.type))]
        return unique
    }

    uniqueFruitsWithCounts() {
        const data = this.mixedFruits()
        const temp = new Object()
        const output = []
        data.forEach(element => {
            if (temp[element['type']]) {
                temp[element['type']] += element['weight']
            } else {
                temp[element['type']] = element['weight']
            }
        })
        for (const type in temp) {
            output.push({ type, count: temp[type] })
        }
        return output
    }

    basketWeight() {
        const data = this.mixedFruits()
        let weight = 0
        data.forEach(element => {
            weight += element['weight']
        });
        return weight
    }

    output() {
        const temp = {
            total_fruits: this.mixedFruits().length,
            total_weight: this.basketWeight(),
            fruit_counts: this.uniqueFruitsWithCounts()
        }
        try {
            fs.writeFileSync('output.json', JSON.stringify(temp), 'utf8')
        } catch (err) {
            console.log(err)
        }
        return temp

    }
}