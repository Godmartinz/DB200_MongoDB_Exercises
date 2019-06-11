/*  Query / Find Documents
 -------------------------------------------------------
 query the movies collection to
    db.movies.find({});
 get all documents

 get all documents with writer set to "Quentin Tarantino"

     db.movies.find({"writer": "Quentin Tarantino"});

 get all documents where actors include "Brad Pitt"

db.movies.find({"actors": "Brad Pitt"});

 get all documents with franchise set to "The Hobbit"

db.movies.find({"franchise": "The Hobbit"});

 get all movies released in the 90s

db.movies.find({"year": {$gte:"1990", $lt:"2000"}});

 get all movies released before the year 2000 or after 2010

db.movies.find({year: {$not:{$gt:2000, $lt:2010}}})


 Update Documents
 ------------------------------------------------------------------------------------------------------------

 add a synopsis to "The Hobbit: An Unexpected Journey" : "A reluctant hobbit, Bilbo Baggins, sets out to the Lonely Mountain with a spirited group of dwarves to reclaim their mountain home - and the gold within it - from the dragon Smaug."

 add a synopsis to "The Hobbit: The Desolation of Smaug" : "The dwarves, along with Bilbo Baggins and Gandalf the Grey, continue their quest to reclaim Erebor, their homeland, from Smaug. Bilbo Baggins is in possession of a mysterious and magical ring."

 add an actor named "Samuel L. Jackson" to the movie "Pulp Fiction"

 Text Search
 find all movies that have a synopsis that contains the word "Bilbo"

    db.movies.find({synopsis: /Bilbo/})
 find all movies that have a synopsis that contains the word "Gandalf"
    db.movies.find({synopsis: /Gandalf/})
 find all movies that have a synopsis that contains the word "Bilbo" and not the word "Gandalf"
    db.movies.find({"synopsis": {$exists: "Bilbo", $not:/Gandalf/}})    
 find all movies that have a synopsis that contains the word "dwarves" or "hobbit"
    db.movies.find({ $or: [{ "synopsis": /dwarves/ }, { "synopsis": /hobbit/ }]})
 find all movies that have a synopsis that contains the word "gold" and "dragon"
    db.movies.find({ $and: [{ "synopsis": /gold/ }, { "synopsis": /dragon/ }]})
 Delete Documents
 ---------------------------------------------------------
 delete the movie "Pee Wee Herman's Big Adventure"
    db.movies.remove({"title": "Pee Wee Herman's Big Adventure"})
 delete the movie "Avatar" 
    db.movies.remove({"title": "Avatar"}) */

/* QUERYING RELATED COLLECTIONS
1. db.users.find({})
2. db.posts.find({})
3. db.posts.find({"username":"SallySmith"})
4. db.posts.find({"username":"JimmyHagen"})
5. db.comments.find({})
6. db.comments.find({"username":"SallySmith"})
7. db.comments.find({"username": "JimmyHagen"})
8. db.comments.find({"post": ObjectId("5d001b5abb76c94bf8d0fdf0")}) */