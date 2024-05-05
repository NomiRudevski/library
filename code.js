let availableBooks = [
    { "id": "0", "title": "1984", "author": "George Orwell", "genre": "Dystopian Fiction", "image": "https://wp.penguin.co.uk/wp-content/uploads/2020/01/Nineteen-eighty-four-1962-reprint-cover.jpg" },
    { "id": "1", "title": "To Kill a Mockingbird", "author": "Harper Lee", "genre": "Southern Gothic", "image": "https://m.media-amazon.com/images/I/81aY1lxk+9L._AC_UF1000,1000_QL80_DpWeblab_.jpg" },
    { "id": "2", "title": "Pride and Prejudice", "author": "Jane Austen", "genre": "Romance", "image": "https://images.squarespace-cdn.com/content/v1/58c180edff7c50dd0e51a2ad/1596042032039-IN7LLXRVDKGVC854LVHE/9780241375273.jpg" },
    { "id": "3", "title": "The Great Gatsby", "author": "F. Scott Fitzgerald", "genre": "Tragedy", "image": "https://m.media-amazon.com/images/I/81QuEGw8VPL._AC_UF1000,1000_QL80_.jpg" },
    { "id": "4", "title": "The Catcher in the Rye", "author": "J.D. Salinger", "genre": "Literary Fiction", "image": "https://m.media-amazon.com/images/I/8125BDk3l9L._AC_UF1000,1000_QL80_DpWeblab_.jpg" },
    { "id": "5", "title": "The Lord of the Rings", "author": "J.R.R. Tolkien", "genre": "High Fantasy", "image": "https://m.media-amazon.com/images/I/91Yr0n5lNWL._AC_UF1000,1000_QL80_.jpg" },
    { "id": "6", "title": "Harry Potter - Goblet of Fire", "author": "J.K. Rowling", "genre": "Fantasy", "image": "https://m.media-amazon.com/images/I/513TQ4ihqqL.jpg" },
    { "id": "7", "title": "The Da Vinci Code", "author": "Dan Brown", "genre": "Mystery", "image": "https://m.media-amazon.com/images/I/811nqCf7o1L._AC_UF1000,1000_QL80_.jpg" },
    { "id": "8", "title": "Gone Girl", "author": "Gillian Flynn", "genre": "Psychological Thriller", "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB9R3PBUWY9RZZFBj2Fwx2GCsgINFlgbp4CGF4q7FE7g&s" },
    { "id": "9", "title": "The Alchemist", "author": "Paulo Coelho", "genre": "Philosophical Fiction", "image": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1654371463i/18144590.jpg" },
    { "id": "10", "title": "Brave New World", "author": "Aldous Huxley", "genre": "Dystopian Fiction", "image": "https://m.media-amazon.com/images/I/91D4YvdC0dL._AC_UF1000,1000_QL80_.jpg" },
    { "id": "11", "title": "Moby-Dick", "author": "Herman Melville", "genre": "Adventure", "image": "https://m.media-amazon.com/images/I/610qaD5PskL._AC_UF1000,1000_QL80_.jpg" },
    { "id": "12", "title": "The Hobbit", "author": "J.R.R. Tolkien", "genre": "Fantasy", "image": "https://m.media-amazon.com/images/I/51gFkMOpo+L.jpg" },
    { "id": "13", "title": "Sherlock Holmes", "author": "Arthur Conan Doyle", "genre": "Mystery", "image": "https://images.thenile.io/r1000/9781802792546.jpg" },
    { "id": "14", "title": "The Road", "author": "Cormac McCarthy", "genre": "Post-Apocalyptic Fiction", "image": "https://upload.wikimedia.org/wikipedia/commons/2/27/The-road.jpg" },
    { "id": "15", "title": "Jane Eyre", "author": "Charlotte Bronte", "genre": "Romance", "image": "https://m.media-amazon.com/images/I/61RmfGsyCrL._AC_UF1000,1000_QL80_DpWeblab_.jpg" },
    { "id": "16", "title": "The Hunger Games", "author": "Suzanne Collins", "genre": "Science Fiction", "image": "https://www.thebookshop.es/productimages/1200/the-hunger-games---suzanne-collins_269889.jpg" },
    { "id": "17", "title": "Fahrenheit 451", "author": "Ray Bradbury", "genre": "Dystopian Fiction", "image": "https://m.media-amazon.com/images/I/71X0Wsoa+vL._AC_UF894,1000_QL80_.jpg" },
    { "id": "18", "title": "The Picture of Dorian Gray", "author": "Oscar Wilde", "genre": "Horror", "image": "https://m.media-amazon.com/images/I/51IPe62r8gL._AC_UF1000,1000_QL80_DpWeblab_.jpg" },
    { "id": "19", "title": "The Kite Runner", "author": "Khaled Hosseini", "genre": "Historical Fiction", "image": "https://res.cloudinary.com/bloomsbury-atlas/image/upload/w_360,c_scale/jackets/9781526668431.jpg" }
]

let borrowedBooks = [
    { "id": "20", "title": "The Road to Wigan Pier", "author": "George Orwell", "genre": "Non-Fiction", "image": "https://cdn.kobo.com/book-images/673ae1f4-7c2d-442b-823e-6007d73d1e05/1200/1200/False/the-road-to-wigan-pier-44.jpg" },
    { "id": "21", "title": "The Martian", "author": "Andy Weir", "genre": "Science Fiction", "image": "https://upload.wikimedia.org/wikipedia/commons/7/71/The_Martian_%28Weir_novel%29.jpg" },
    { "id": "22", "title": "Beloved", "author": "Toni Morrison", "genre": "Magical Realism", "image": "https://m.media-amazon.com/images/I/51Qj9kPD4CL._AC_UF1000,1000_QL80_DpWeblab_.jpg" },
    { "id": "23", "title": "It", "author": "Stephen King", "genre": "Horror", "image": "https://upload.wikimedia.org/wikipedia/commons/1/1a/It_%281986%29_front_cover%2C_first_edition.jpg" },
    { "id": "24", "title": "Dune", "author": "Frank Herbert", "genre": "Science Fiction", "image": "https://covers.shakespeareandcompany.com/97814732/9781473233959.jpg" },
    { "id": "25", "title": "The Name of the Wind", "author": "Patrick Rothfuss", "genre": "Fantasy", "image": "https://grimoakpress.com/cdn/shop/files/cover-notw-fc.jpg?v=1706902909&width=1445" },
    { "id": "26", "title": "The Handmaid's Tale", "author": "Margaret Atwood", "genre": "Dystopian Fiction", "image": "https://m.media-amazon.com/images/I/41aPpkv7ZjL.jpg" },
    { "id": "27", "title": "Outliers", "author": "Malcolm Gladwell", "genre": "Psychology", "image": "https://m.media-amazon.com/images/I/91lYcUJ8JsL._AC_UF1000,1000_QL80_.jpg" },
    { "id": "28", "title": "Room", "author": "Emma Donoghue", "genre": "Psychological Fiction", "image": "https://m.media-amazon.com/images/I/71CYhjhgzpL._AC_UF894,1000_QL80_DpWeblab_.jpg" },
    { "id": "29", "title": "The Shadow of the Wind", "author": "Carlos Ruiz Zafón", "genre": "Historical Fiction", "image": "https://m.media-amazon.com/images/I/913DdP7RflL._AC_UF1000,1000_QL80_.jpg" },
    { "id": "30", "title": "Holes", "author": "Louis Sachar", "genre": "Young Adult, Mystery", "image": "https://m.media-amazon.com/images/I/71pziPx5qpL._AC_UF1000,1000_QL80_.jpg" },
    { "id": "31", "title": "The Goldfinch", "author": "Donna Tartt", "genre": "Literary Fiction", "image": "https://cdn.kobo.com/book-images/76c18bc2-6b9e-473f-9aa9-1453d9b6cc62/1200/1200/False/the-goldfinch.jpg" },
    { "id": "32", "title": "The Night Circus", "author": "Erin Morgenstern", "genre": "Romance", "image": "https://m.media-amazon.com/images/I/61Pqqc4muHL._AC_UF1000,1000_QL80_.jpg" },
    { "id": "33", "title": "The Sympathizer", "author": "Viet Thanh Nguyen", "genre": "Historical Fiction", "image": "https://m.media-amazon.com/images/I/91t3tKqImXL._AC_UF1000,1000_QL80_.jpg" },
    { "id": "34", "title": "Educated", "author": "Tara Westover", "genre": "Autobiography", "image": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1506026635i/35133922.jpg" }
]

let userBooks = [
    { "id": "35", "title": "The Silent Patient", "author": "Alex Michaelides", "genre": "Psychological Thriller", "image": "https://m.media-amazon.com/images/I/91lslnZ-btL._AC_UF1000,1000_QL80_DpWeblab_.jpg" },
    { "id": "36", "title": "Where the Crawdads Sing", "author": "Delia Owens", "genre": "Mystery", "image": "https://m.media-amazon.com/images/I/81e+mSqZvnL._AC_UF894,1000_QL80_.jpg" },
    { "id": "37", "title": "The Testaments", "author": "Margaret Atwood", "genre": "Dystopian Fiction", "image": "https://upload.wikimedia.org/wikipedia/en/thumb/5/54/The_Testaments_%28Atwood_novel%29.png/220px-The_Testaments_%28Atwood_novel%29.png" },
    { "id": "38", "title": "Circe", "author": "Madeline Miller", "genre": "Mythological Fiction", "image": "https://m.media-amazon.com/images/I/B1eAVSHxJ4L._AC_UF1000,1000_QL80_.jpg" },
    { "id": "39", "title": "Gone", "author": "Michael Grant", "genre": "Young Adult, Science Fiction", "image": "https://m.media-amazon.com/images/I/81GbBJr+ANL._AC_UF1000,1000_QL80_.jpg" }
]

let descriptions = [
    { "description": "A dystopian novel about a totalitarian society where critical thought is suppressed." },
    { "description": "A story of racial injustice and moral growth in the American South." },
    { "description": "A classic romance novel exploring social norms and love." },
    { "description": "A tale of wealth, ambition, and tragic love set in the Jazz Age." },
    { "description": "A coming-of-age novel following a disenchanted teenager in New York City." },
    { "description": "An epic fantasy journey to destroy a powerful ring and save Middle-earth." },
    { "description": "A magical adventure where Harry competes in a dangerous wizard tournament." },
    { "description": "A mystery thriller involving hidden secrets of religious history." },
    { "description": "A psychological thriller about a marriage gone terribly wrong." },
    { "description": "An allegorical novel about pursuing one's dreams and destiny." },
    { "description": "A dystopian vision of a future society controlled by technology and social conditioning." },
    { "description": "An epic tale of Captain Ahab's obsessive quest for revenge against a white whale." },
    { "description": "A fantasy adventure following Bilbo Baggins on a quest to reclaim treasure." },
    { "description": "Classic detective stories featuring the brilliant Sherlock Holmes and Dr. Watson." },
    { "description": "A post-apocalyptic journey of survival and father-son bond in a bleak world." },
    { "description": "A bildungsroman about a young woman's journey to independence and love." },
    { "description": "A dystopian series where teenagers fight to the death in a televised spectacle." },
    { "description": "A cautionary tale about censorship and the power of knowledge." },
    { "description": "A Gothic novel exploring the price of vanity and eternal youth." },
    { "description": "A story of redemption and friendship set against the backdrop of Afghanistan's history." },
    { "description": "A non-fiction account of working-class life in England during the 1930s." },
    { "description": "A sci-fi survival story of an astronaut stranded on Mars." },
    { "description": "A haunting tale of slavery's legacy and the search for identity." },
    { "description": "A horror novel about a group of friends battling a shape-shifting entity." },
    { "description": "A sci-fi epic of political intrigue and desert planets." },
    { "description": "A fantasy tale of a gifted young magician's adventures and trials." },
    { "description": "A dystopian story of a woman's struggle for freedom in a totalitarian society." },
    { "description": "An exploration of success and the factors that contribute to extraordinary achievement." },
    { "description": "A novel narrated by a young boy who has spent his entire life in captivity with his mother." },
    { "description": "A mystery set in post-war Barcelona revolving around a forgotten book." },
    { "description": "A young adult novel intertwining history, mystery, and redemption." },
    { "description": "A literary coming-of-age story centered around a stolen painting." },
    { "description": "A magical love story set in a mysterious circus that only appears at night." },
    { "description": "A novel about identity, war, and divided loyalties during the Vietnam War." },
    { "description": "A memoir of resilience and self-discovery through education." },
    { "description": "A psychological thriller about a woman who stops speaking after a mysterious murder." },
    { "description": "A mystery novel about a young woman living in isolation in the marshes of North Carolina." },
    { "description": "A sequel to 'The Handmaid's Tale,' exploring the aftermath of the dystopian regime." },
    { "description": "A reimagining of the story of Circe, the sorceress from Greek mythology." },
    { "description": "A dystopian novel where everyone over the age of 15 mysteriously disappears." }

]

function randomBorrow() {
    function getRandomNumA(min = 0, max = availableBooks.length-1) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    let i = getRandomNumA();
    let tempBook = availableBooks[i]
    availableBooks.splice(i, 1)
    borrowedBooks.push(tempBook)
    save()
}

function randomReturn(){
    function getRandomNumB(min = 0, max = borrowedBooks.length-1) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    let i = getRandomNumB();
    let tempBook = borrowedBooks[i]
    borrowedBooks.splice(i, 1)
    availableBooks.push(tempBook)
    save()
}

function ramdomReturnAndBorrow() {
    randomBorrow()
    randomReturn()
    randomReturn()
}

function updateData() {
    availableBooks = JSON.parse(localStorage.getItem("availableBooks"))
    borrowedBooks = JSON.parse(localStorage.getItem("borrowedBooks"))
    userBooks = JSON.parse(localStorage.getItem("userBooks"))
}
function load(page, id) {
    updateData()
    let temp = [];
    let functionA = "";
    let display = '<ol>'
    if (page.includes('/loans.html')) {
        temp = borrowedBooks.concat(userBooks);
        functionA = "info"
    } else if (page.includes('/books.html')) {
        temp = availableBooks;
        functionA = "borrowBook"
    } else if (page.includes('/user_books.html')) {
        temp = userBooks;
        functionA = "returnBook"
    }

    for (let i = 0; i < temp.length; i++) {
        display += `
        <div class="card">
            <img src="${temp[i].image}"
                alt="" class="image" onclick = "info(${i},'${document.location.pathname}')">
            <div class="book-title">${temp[i].title}</div>
            <div class="book-text">${temp[i].author}</div>
            <div class="book-text">${temp[i].genre}</div>
        </div>
    `
    }
    document.getElementById(id).innerHTML = display
}

function save() {
    localStorage.setItem("availableBooks", JSON.stringify(availableBooks))
    localStorage.setItem("borrowedBooks", JSON.stringify(borrowedBooks))
    localStorage.setItem("userBooks", JSON.stringify(userBooks))
}

function borrowBook(i) {
    let tempBook = availableBooks[i]
    availableBooks.splice(i, 1)
    userBooks.push(tempBook)
    save()
    load(document.location.pathname, "availableBooksList")

}

function returnBook(i) {
    console.log("return", i)
    let tempReturn = userBooks[i]
    userBooks.splice(i, 1)
    availableBooks.push(tempReturn)
    save()
    updateData()
    load(document.location.pathname, "userBooksA")

}

function info(i, page) {
    let ind = i
    let infoID
    let tempArray
    let tempButton
    if (page.includes('/loans.html')){
        infoID ="infoL"
        tempArray = borrowedBooks.concat(userBooks)
        tempButton = ""
    }else if(page.includes('/books.html')){
        infoID = "infoB"
        tempArray = availableBooks
        tempButton = `
        <button onclick = "borrowBook(${ind})" class = "d-button"> borrow </button>
        `
    }else if(page.includes('/user_books.html')){
        infoID = "infoU"
        tempArray = userBooks
        tempButton = `
        <button onclick = "returnBook(${ind})" class = "d-button"> return </button>
        `
    }
    
    
    infoPanel = document.getElementById(infoID)
    infoPanel.style.visibility = "visible"
    index = tempArray[i].id
    infoPanel.innerHTML = `
        <div class="info-win">
            <img src="${tempArray[i].image}"
                alt="" class="image">
            <div class="book-title">${tempArray[i].title}</div>
            <div class="book-text">${tempArray[i].author}</div>
            <div class="book-text">${tempArray[i].genre}</div>
            <div class="info-text">
                ${descriptions[index].description}
            </div>
            <div>${tempButton}</div>
        </div>`

}

function closemodule(x) {
    document.getElementById(x).style.visibility = "hidden";
}
