import "../style.css"

const ContentItem = ({
    gabunganChild
}) => {

    const {
        messageBaru,
        gabungan: {
            count,
            message,
            lists,
            arrayList,
            itemObject
        }
    } = gabunganChild

    return (
        <section>
            <div>{messageBaru}</div>
            <div>{count}</div>
            <div>{message}</div>
            <ul>
                {lists.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
            <ul>
                {arrayList.map((item) => (
                    <li key={`list of ${item.id}`}>
                        {item.title} ({item.id})
                    </li>
                ))}
            </ul>
            <div>
                <div>{itemObject.username}</div>
                <div>{itemObject.password}</div>
            </div>
        </section>
    )
}

export default ContentItem
