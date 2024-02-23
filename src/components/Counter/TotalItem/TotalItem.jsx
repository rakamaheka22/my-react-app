import "../style.css"

const TotalItem = ({ total }) => {

    const { price, count } = total

    // ngasih diskon
    // jika beli > 3 dapet diskon 25%
    // jika beli > 6 dapet diskon 50%
    // jika beli > 10 dapet diskon 65%

    const normalPrice = price * count


    const withDiscount = (localPrice) => {
        let discount = 0
        if (count > 10) discount = localPrice * 0.65
        else if (count > 6) discount = localPrice * 0.5
        else if (count > 3) discount = localPrice * 0.25

        return discount
    }

    const withPPN = (localPrice, percentPPN = 0) => {
        let ppn = 0
        if (count > 10) ppn = percentPPN
        return localPrice * ppn
    }

    const showTotalPrice = () => {
        return (normalPrice - withDiscount(
            normalPrice
        )) + withPPN(
            normalPrice - withDiscount(
                normalPrice
            ),
            0.11
        )
    }

    return (
        <section>
            <strong>Rp{showTotalPrice()}</strong>
        </section>
    )
}

export default TotalItem
