import ContentItem from "./ContentItem/ContentItem";

// style untuk content
import "./style.css";

// component react
const Content = () => {

  // number
  const count = 12345
  // string
  const message = "hello world"
  // array
  const lists = [1, 2, 3, 4, 5, 6]
  // array of objects
  const arrayList = [
    {
      id: 1,
      title: "test 1",
    },
    {
      id: 2,
      title: "test 2",
    },
    {
      id: 3,
      title: "test 1",
    },
  ]
  // object
  const itemObject = {
    username: "Raka",
    password: 123
  }


  const gabungan = {
    count: count,
    message: message,
    lists: lists,
    arrayList: arrayList,
    itemObject: itemObject
  }

  const gabungan2 = {
    messageBaru: "Baruuuu",
    gabungan: gabungan
  }

  return (
    <main>
      <ContentItem
        countChild={count}
        messageChild={message} 
        listsChild={lists}
        arrayListChild={arrayList}
        itemObjectChild={itemObject}
        gabunganChild={gabungan2}
      />
    </main>
  )
}

export default Content