const AllBooks = [
    /* Fiction */
    {
        "title": "To Kill a Mockingbird",
        "author": "Harper Lee",
        "pdf": "https://giove.isti.cnr.it/demo/eread/libri/angry/mockingbird.pdf",
        "ratings": 4.28,
        "synopsis": "Set in the 1930s in the fictional town of Maycomb, Alabama, the story follows young Scout Finch as her father, lawyer Atticus Finch, defends a black man accused of raping a white woman.",
        "number_of_pages": 281,
        "characters": ["Scout Finch", "Atticus Finch", "Boo Radley"],
        "genre": "Fiction"
      },
      {
        "title": "1984",
        "pdf": "https://rauterberg.employee.id.tue.nl/lecturenotes/DDM110%20CAS/Orwell-1949%201984.pdf",
        "author": "George Orwell",
        "ratings": 4.18,
        "synopsis": "Set in a dystopian future where the government, led by the Party and its leader Big Brother, exercises totalitarian control over all aspects of people's lives.",
        "number_of_pages": 328,
        "characters": ["Winston Smith", "Julia", "Big Brother"],
        "genre": "Fiction"
      },
      {
        "title": "The Great Gatsby",
        "pdf": "https://www.wsfcs.k12.nc.us/cms/lib/NC01001395/Centricity/Domain/7935/Gatsby_PDF_FullText.pdf",
        "author": "F. Scott Fitzgerald",
        "imgSource": "https://i0.wp.com/americanwritersmuseum.org/wp-content/uploads/2018/02/CK-3.jpg?resize=267%2C400&ssl=1",
        "ratings": 3.93,
        "synopsis": "Told from the perspective of Nick Carraway, the novel explores themes of decadence, idealism, and the American Dream through the lives of wealthy Jay Gatsby and his love interest, Daisy Buchanan.",
        "number_of_pages": 180,
        "characters": ["Jay Gatsby", "Daisy Buchanan", "Nick Carraway"],
        "genre": "Fiction"
      },
      {
        "title": "Pride and Prejudice",
        "author": "Jane Austen",
        "pdf": "https://www.gutenberg.org/files/1342/old/pandp12p.pdf",
        "ratings": 4.27,
        "synopsis": "Follows the romantic entanglements of the Bennet sisters, particularly the independent Elizabeth Bennet, and the wealthy Mr. Darcy.",
        "number_of_pages": 279,
        "characters": ["Elizabeth Bennet", "Mr. Darcy", "Jane Bennet"],
        "genre": "Fiction"
      },
      {
        "title": "The Catcher in the Rye",
        "author": "J.D. Salinger",
        "pdf": "https://simontechnology.org/ourpages/auto/2013/1/23/53406450/Catcher%20in%20the%20Rye%20Text.pdf",
        "ratings": 3.80,
        "synopsis": "Narrated by Holden Caulfield, a disaffected teenager who narrates the events that happened to him during a few days after being expelled from prep school.",
        "number_of_pages": 277,
        "characters": ["Holden Caulfield", "Phoebe Caulfield", "Allie Caulfield"],
        "genre": "Fiction"
      },
      {
        "title": "The Lord of the Rings",
        "pdf": "https://gosafir.com/mag/wp-content/uploads/2019/12/Tolkien-J.-The-lord-of-the-rings-HarperCollins-ebooks-2010.pdf",
        "author": "J.R.R. Tolkien",
        "ratings": 4.50,
        "synopsis": "Follows the quest to destroy the One Ring, which has the power to dominate Middle-earth, undertaken by Frodo Baggins and his fellowship of various races and creatures.",
        "number_of_pages": 1178,
        "characters": ["Frodo Baggins", "Gandalf", "Aragorn"],
        "genre": "Fiction"
      },
      {
        "title": "Moby-Dick",
        "author": "Herman Melville",
        "pdf": "https://ia902203.us.archive.org/6/items/mobydickorwhale01melvuoft/mobydickorwhale01melvuoft.pdf",
        "ratings": 3.52,
        "synopsis": "The novel follows the narrator Ishmael's sea voyage aboard the whaling ship Pequod, led by the obsessive Captain Ahab in pursuit of the elusive white whale, Moby Dick.",
        "number_of_pages": 720,
        "characters": ["Captain Ahab", "Ishmael", "Queequeg"],
        "genre": "Fiction"
      },
      {
        "title": "The Hobbit",
        "pdf": "https://rsd2-alert-durden-reading-room.weebly.com/uploads/6/7/1/6/6716949/the_hobbit_tolkien.pdf",
        "author": "J.R.R. Tolkien",
        "ratings": 4.28,
        "synopsis": "Follows the journey of Bilbo Baggins, a hobbit who is recruited by the wizard Gandalf and a group of dwarves to reclaim their homeland and treasure from the dragon Smaug.",
        "number_of_pages": 310,
        "characters": ["Bilbo Baggins", "Gandalf", "Thorin Oakenshield"],
        "genre": "Fiction"
      },
      {
        "title": "Harry Potter and the Sorcerer's Stone",
        "pdf": "https://kalyankrishna4886.wordpress.com/wp-content/uploads/2013/09/harry-potter-book-collection-1-4.pdf",
        "author": "J.K. Rowling",
        "ratings": 4.49,
        "synopsis": "Introduces the young wizard Harry Potter as he discovers his magical heritage and begins his education at Hogwarts School of Witchcraft and Wizardry.",
        "number_of_pages": 309,
        "characters": ["Harry Potter", "Hermione Granger", "Ron Weasley"],
        "genre": "Fiction"
      },
      {
        "title": "The Picture of Dorian Gray",
        "pdf": "https://web2.mlp.cz/koweb/00/04/30/22/80/the_picture_of_dorian_gray.pdf",
        "author": "Oscar Wilde",
        "ratings": 4.07,
        "synopsis": "Follows the handsome and narcissistic Dorian Gray, who sells his soul to ensure that a portrait of himself will age while he remains youthful and hedonistic.",
        "number_of_pages": 254,
        "characters": ["Dorian Gray", "Lord Henry Wotton", "Basil Hallward"],
        "genre": "Fiction"
      },
      {
        "title": "Jane Eyre",
        "pdf": "https://www.ucm.es/data/cont/docs/119-2014-04-09-Jane%20Eyre.pdf",
        "author": "Charlotte Brontë",
        "ratings": 4.12,
        "synopsis": "The story of orphan Jane Eyre, who becomes a governess and falls in love with her employer, the brooding Mr. Rochester, while uncovering dark secrets at Thornfield Hall.",
        "number_of_pages": 507,
        "characters": ["Jane Eyre", "Edward Rochester", "Mrs. Fairfax"],
        "genre": "Fiction"
      },
      {
        "title": "The Hunger Games",
        "pdf": "https://mcla7th.weebly.com/uploads/1/4/0/8/14084007/hunger-games-18.pdf",
        "author": "Suzanne Collins",
        "ratings": 4.34,
        "synopsis": "Set in a dystopian future where teenagers are forced to compete in a televised death match called the Hunger Games, Katniss Everdeen volunteers to take her sister's place.",
        "number_of_pages": 374,
        "characters": ["Katniss Everdeen", "Peeta Mellark", "Gale Hawthorne"],
        "genre": "Fiction"
      },
      {
        "title": "Brave New World",
        "author": "Aldous Huxley",
        "pdf": "https://www.plato-philosophy.org/wp-content/uploads/2016/05/BraveNewWorld-1.pdf",
        "ratings": 3.97,
        "synopsis": "Set in a future world where people are genetically engineered and conditioned for specific roles, the novel explores themes of freedom, individuality, and the consequences of technology.",
        "number_of_pages": 311,
        "characters": ["Bernard Marx", "Lenina Crowne", "John the Savage"],
        "genre": "Fiction"
      },



    //Non Fiction
    {
        "title": "Sapiens",
        "pdf": "https://www.1pezeshk.com/wp-content/uploads/2019/07/Sapiens-A-Brief-History-of-Humankind.pdf",
        "ratings": 4.5,
        "synopsis": "Sapiens tackles the history of humankind, from the emergence of Homo sapiens in Africa to the present day, encompassing the Cognitive Revolution, Agricultural Revolution, and more.",
        "number_of_pages": 464,
        "characters": [],
        "genre": "Non-Fiction"
      },
      {
        "title": "The Immortal Life of Henrietta Lacks",
        "author": "Rebecca Skloot",
        "pdf": "https://ia803009.us.archive.org/15/items/HELAFullText/HELA%20Full%20Text.pdf",
        "ratings": 4.1,
        "synopsis": "This book tells the story of Henrietta Lacks, a woman whose cells were taken without her consent in 1951 and became one of the most important tools in medicine, contributing to countless scientific breakthroughs.",
        "number_of_pages": 381,
        "characters": ["Henrietta Lacks"],
        "genre": "Non-Fiction"
      },
      {
        "title": "Quiet",
        "author": "Susan Cain",
        "pdf": "https://pdfs.semanticscholar.org/0b99/25840a001547554d600aca1237d6cf30fca5.pdf",
        "ratings": 4.0,
        "synopsis": "Quiet explores the power of introverts in a society that often values extroversion, shedding light on the strengths and talents introverts bring to the table.",
        "number_of_pages": 333,
        "characters": [],
        "genre": "Non-Fiction"
      },
      {
        "title": "Becoming",
        "author": "Michelle Obama",
        "pdf": "https://static.fnac-static.com/multimedia/PT/pdf/9780241982976.pdf",
        "ratings": 4.8,
        "synopsis": "Becoming is the memoir of former First Lady Michelle Obama, chronicling her life from her childhood in Chicago to her years in the White House.",
        "number_of_pages": 426,
        "characters": ["Michelle Obama"],
        "genre": "Non-Fiction"
      },
      {
        "title": "The Power of Habit",
        "author": "Charles Duhigg",
        "pdf": "https://ia803102.us.archive.org/35/items/CharlesDuhigg.ThePowerOfHabit_201808/Charles-Duhigg.The-Power-of-Habit.pdf",
        "ratings": 4.3,
        "synopsis": "This book explores the science behind habits and how they can be changed, offering insights into personal and professional transformation.",
        "number_of_pages": 375,
        "characters": [],
        "genre": "Non-Fiction"
      },
      {
        "title": "The Sixth Extinction",
        "pdf": "https://ena.etsmtl.ca/pluginfile.php/1474194/mod_folder/content/0/02-Documentation/Facultative/22.1%20%C3%89nergie%20et%20changements%20climatiques/Elizabeth_Kolbert_-_The_Sixth_Extinction.pdf?forcedownload=1",
        "author": "Elizabeth Kolbert",
        "ratings": 4.2,
        "synopsis": "The Sixth Extinction examines the ongoing mass extinction event caused by human activity, exploring its causes and consequences.",
        "number_of_pages": 319,
        "characters": [],
        "genre": "Non-Fiction"
      },
      {
        "title": "Thinking, Fast and Slow",
        "pdf": "https://ia600808.us.archive.org/14/items/DanielKahnemanThinkingFastAndSlow/Daniel%20Kahneman-Thinking%2C%20Fast%20and%20Slow%20%20.pdf",
        "author": "Daniel Kahneman",
        "ratings": 4.1,
        "synopsis": "In this book, Nobel laureate Daniel Kahneman explores the two systems that drive the way we think: the fast, intuitive system, and the slow, deliberate system.",
        "number_of_pages": 499,
        "characters": [],
        "genre": "Non-Fiction"
      },
      {
        "title": "Educated",
        "pdf": "https://download.booksfree.org/download-book/?dlm-dp-dl=27339%E2%80%9D%3E%3Cbutton%20class=",
        "author": "Tara Westover",
        "ratings": 4.5,
        "synopsis": "Educated is a memoir that recounts Tara Westover's journey from growing up in a strict, isolated household in rural Idaho to earning a PhD from Cambridge University.",
        "number_of_pages": 334,
        "characters": ["Tara Westover"],
        "genre": "Non-Fiction"
      },
      {
        "title": "The Emperor of All Maladies",
        "pdf": "https://www.unife.it/medicina/lm.medicina/studiare/minisiti/c_s/cancer_biology/materiale-didattico/the-emperor-of-all-maladies-a-biography-of-cancer-pd.pdf",
        "author": "Siddhartha Mukherjee",
        "ratings": 4.3,
        "synopsis": "This Pulitzer Prize-winning book provides a comprehensive history of cancer, from its first documented appearances thousands of years ago to the present day.",
        "number_of_pages": 571,
        "characters": [],
        "genre": "Non-Fiction"
      },
      {
        "title": "Born a Crime",
        "author": "Trevor Noah",
        "pdf": "https://pursuitofdiversity.wordpress.com/wp-content/uploads/2018/06/born-a-crime-trevor-noah.pdf",
        "ratings": 4.8,
        "synopsis": "In this memoir, comedian Trevor Noah reflects on his childhood growing up in apartheid-era South Africa, where his existence as the child of a white father and black mother was illegal.",
        "number_of_pages": 304,
        "characters": ["Trevor Noah"],
        "genre": "Non-Fiction"
      },
      {
        "title": "Guns, Germs, and Steel",
        "pdf": "https://delong.typepad.com/files/diamond-selections.pdf",
        "author": "Jared Diamond",
        "ratings": 4.0,
        "synopsis": "Guns, Germs, and Steel examines the factors that led to the rise of civilizations and the disparities in power and wealth among different societies.",
        "number_of_pages": 425,
        "characters": [],
        "genre": "Non-Fiction"
      },
      {
        "title": "The Soul of an Octopus",
        "author": "Sy Montgomery",
        "pdf": "https://dokumen.pub/qdownload/the-soul-of-an-octopus-a-surprising-exploration-into-the-wonder-of-consciousness-1451697740-9781451697742.html",
        "ratings": 4.1,
        "synopsis": "This book delves into the fascinating world of octopuses, exploring their intelligence, emotions, and relationships with humans.",
        "number_of_pages": 272,
        "characters": [],
        "genre": "Non-Fiction"
      },
      {
        "title": "The Devil in the White City",
        "author": "Erik Larson",  
        "pdf": "https://www.yes-pdf.com/book/2829/read",
        "ratings": 4.2,
        "synopsis": "This non-fiction book intertwines the true stories of Daniel H. Burnham, the architect behind the 1893 World's Fair in Chicago, and H.H. Holmes, a serial killer who used the fair to lure his victims.",
        "number_of_pages": 447,
        "characters": ["Daniel H. Burnham", "H.H. Holmes"],
        "genre": "Non-Fiction"
      },
      {
        "title": "Homo Deus",
        "author": "Yuval Noah Harari",
        "pdf": "https://readandlaugh.wordpress.com/wp-content/uploads/2018/04/homo_deus_a_brief_history_of_tomorrow_pdf.pdf",
        "ratings": 4.4,
        "synopsis": "Homo Deus explores the future of humanity, contemplating how advancements in technology, artificial intelligence, and biotechnology might shape our future.",
        "number_of_pages": 449,
        "characters": [],
        "genre": "Non-Fiction"
      },
      {
        "title": "Just Mercy",
        "author": "Bryan Stevenson",
        "ratings": 4.6,
        "pdf": "https://neekaan.com/JustMercy.pdf",
        "synopsis": "Just Mercy recounts Bryan Stevenson's experiences as a young lawyer fighting for justice in the U.S. legal system, particularly for those unfairly sentenced or wrongly convicted.",
        "number_of_pages": 349,
        "characters": ["Bryan Stevenson"],
        "genre": "Non-Fiction" 
      },



      //Science
      {
        "title": "A Brief History of Time",
        "author": "Stephen Hawking",
        "pdf": "https://www.fisica.net/relatividade/stephen_hawking_a_brief_history_of_time.pdf",
        "ratings": 4.1,
        "synopsis": "A popular science book on cosmology by British physicist Stephen Hawking. It discusses the origin and eventual fate of the universe.",
        "number_of_pages": 256,
        "characters": [],
        "genre": "Science"
      },
      {
        "title": "Cosmos",
        "author": "Carl Sagan",
        "pdf": "https://www.arvindguptatoys.com/arvindgupta/sagancosmos.pdf",
        "ratings": 4.35,
        "synopsis": "A popular science book and a companion to the PBS television series Cosmos: A Personal Voyage. It explores the universe and our place within it.",
        "number_of_pages": 384,
        "characters": [],
        "genre": "Science"
      },
      {
        "title": "The Selfish Gene",
        "pdf": "https://alraziuni.edu.ye/uploads/pdf/The-Selfish-Gene-R.-Dawkins-1976-WW-.pdf",
        "author": "Richard Dawkins",
        "ratings": 4.1,
        "synopsis": "This book by Richard Dawkins discusses the gene-centered view of evolution and natural selection.",
        "number_of_pages": 384,
        "characters": [],
        "genre": "Science"
      },
      {
        "title": "The Origin of Species",
        "author": "Charles Darwin",
        "ratings": 4.0,
        "pdf": "https://www.vliz.be/docs/Zeecijfers/Origin_of_Species.pdf",
        "synopsis": "Charles Darwin's groundbreaking work on the theory of evolution by natural selection, which has profoundly influenced scientific thought.",
        "number_of_pages": 672,
        "characters": [],
        "genre": "Science"
      },
      {
        "title": "The Elegant Universe",
        "author": "Brian Greene",
        "pdf": "https://cdn.preterhuman.net/texts/science_and_technology/physics/String_Theory/The%20Elegant%20Universe%20-%20Brian%20Green.pdf",
        "ratings": 4.0,
        "synopsis": "This book explores superstring theory, a major branch of theoretical physics that attempts to explain all of the fundamental forces and particles in the universe.",
        "number_of_pages": 448,
        "characters": [],
        "genre": "Science"
      },
      {
        "title": "The Structure of Scientific Revolutions",
        "pdf": "https://www.lri.fr/~mbl/Stanford/CS477/papers/Kuhn-SSR-2ndEd.pdf",
        "author": "Thomas S. Kuhn",
        "ratings": 4.0,
        "synopsis": "An influential work in the history of science. It argues that scientific progress is not steady, but rather punctuated by revolutions that change the dominant paradigms of thought.",
        "number_of_pages": 264,
        "characters": [],
        "genre": "Science"
      },
      {
        "title": "Gödel, Escher, Bach",
        "author": "Douglas Hofstadter",
        "ratings": 4.3,
        "pdf": "https://www.physixfan.com/wp-content/files/GEBen.pdf",
        "synopsis": "This Pulitzer Prize-winning book explores the connections between the works of mathematician Kurt Gödel, artist M.C. Escher, and composer Johann Sebastian Bach, and their implications for human thought.",
        "number_of_pages": 777,
        "characters": [],
        "genre": "Science"
      },
      {
        "title": "The Emperor's New Mind",
        "author": "Roger Penrose",
        "pdf": "https://0ducks.wordpress.com/wp-content/uploads/2014/12/the-emperors-new-mind-by-roger-penrose.pdf",
        "ratings": 4.0,
        "synopsis": "Roger Penrose explores the relationship between the human mind and the laws of physics, particularly focusing on the potential for artificial intelligence and consciousness.",
        "number_of_pages": 480,
        "characters": [],
        "genre": "Science"
      },
      {
        "title": "Sapiens",
        "pdf": "https://www.1pezeshk.com/wp-content/uploads/2019/07/Sapiens-A-Brief-History-of-Humankind.pdf",
        "author": "Yuval Noah Harari",
        "ratings": 4.4,
        "synopsis": "This book provides a sweeping history of the human species, from the emergence of Homo sapiens in Africa to the present day.",
        "number_of_pages": 464,
        "characters": [],
        "genre": "Science"
      },
      {
        "title": "The Gene",
        "author": "Siddhartha Mukherjee",
        "ratings": 4.4,
        "pdf": "https://www.calstatela.edu/sites/default/files/business_forum_vol_1_br.pdf",
        "synopsis": "A comprehensive history of genetics, from Mendel to modern molecular biology, exploring the science and ethics of genetic research.",
        "number_of_pages": 608,
        "characters": [],
        "genre": "Science"
      },
      {
        "title": "The Immortal Life of Henrietta Lacks",
        "pdf": "https://ia803009.us.archive.org/15/items/HELAFullText/HELA%20Full%20Text.pdf",
        "author": "Rebecca Skloot",
        "ratings": 4.1,
        "synopsis": "This book tells the story of Henrietta Lacks, whose cells were taken without her consent and became one of the most important tools in medicine, leading to countless medical breakthroughs.",
        "number_of_pages": 400,
        "characters": [],
        "genre": "Science"
      },
      {
        "title": "Lab Girl",
        "author": "Hope Jahren",
        "pdf": "https://www.miamibookfair.com/wp-content/uploads/2021/02/2021-Big-Read-Booklet-1.pdf",
        "ratings": 4.1,
        "synopsis": "A memoir by scientist Hope Jahren, detailing her life in science and her experiences as a geobiologist, studying plants, soil, and ecosystems.",
        "number_of_pages": 304,
        "characters": [],
        "genre": "Science"
      },
      {
        "title": "The Sixth Extinction",
        "author": "Elizabeth Kolbert",
        "ratings": 4.2,
        "synopsis": "Elizabeth Kolbert examines the ongoing mass extinction event caused by human activity, exploring its causes and implications for the planet.",
        "number_of_pages": 336,
        "characters": [],
        "genre": "Science"
      },
      {
        "title": "The Hidden Life of Trees",
        "pdf": "https://avalonlibrary.net/ebooks/Peter%20Wohlleben%20-%20The%20Hidden%20Life%20of%20Trees.pdf",
        "author": "Peter Wohlleben",
        "ratings": 4.3,
        "synopsis": "This book explores the complex and fascinating world of trees, revealing their communication, cooperation, and intelligence.",
        "number_of_pages": 288,
        "characters": [],
        "genre": "Science"
      },
      {
        "title": "Why Evolution Is True",
        "author": "Jerry A. Coyne",
        "pdf": "https://cursosextensao.usp.br/pluginfile.php/556006/mod_folder/content/0/why-evolution-is-true-jerry-a-coyne.pdf?forcedownload=1",
        "ratings": 4.1,
        "synopsis": "Jerry Coyne presents the evidence for evolution by natural selection, addressing common misconceptions and explaining the overwhelming scientific consensus.",
        "number_of_pages": 304,
        "characters": [],
        "genre": "Science"
      },
      {
        "title": "The Demon-Haunted World",
        "author": "Carl Sagan",
        "pdf": "https://tile.loc.gov/storage-services/service/mss/mss85590/004/004.pdf",
        "ratings": 4.3,
        "synopsis": "Carl Sagan advocates for critical thinking and the scientific method as tools to combat superstition, pseudoscience, and misinformation.",
        "number_of_pages": 457,
        "characters": [],
        "genre": "Science"
      },


      //History
      {
        "title": "Guns, Germs, and Steel",
        "pdf": "https://delong.typepad.com/files/diamond-selections.pdf",
        "author": "Jared Diamond",
        "ratings": 4.2,
        "synopsis": "This book explores the reasons why some civilizations succeeded while others failed, focusing on environmental and geographical factors.",
        "number_of_pages": 480,
        "characters": [],
        "genre": "History"
      },
      {
        "title": "The Rise and Fall of the Third Reich",
        "pdf": "https://ia800607.us.archive.org/28/items/B-001-014-606/B-001-014-606.pdf",
        "author": "William L. Shirer",
        "ratings": 4.4,
        "synopsis": "A comprehensive account of the history of Nazi Germany, covering its rise to power, its atrocities, and its eventual downfall.",
        "number_of_pages": 1616,
        "characters": [],
        "genre": "History"
      },
      {
        "title": "A People's History of the United States",
        "pdf": "https://files.libcom.org/files/A%20People%27s%20History%20of%20the%20Unite%20-%20Howard%20Zinn.pdf",
        "author": "Howard Zinn",
        "ratings": 4.1,
        "synopsis": "This book presents American history from the perspective of ordinary people, highlighting their struggles and contributions throughout the country's history.",
        "number_of_pages": 784,
        "characters": [],
        "genre": "History"
      },
      {
        "title": "The Making of the Atomic Bomb",
        "pdf": "https://digital.library.unt.edu/ark:/67531/metadc1395991/m2/1/high_res_d/10186004.pdf",
        "author": "Richard Rhodes",
        "ratings": 4.3,
        "synopsis": "An in-depth exploration of the scientific, political, and military developments that led to the creation of the atomic bomb during World War II.",
        "number_of_pages": 928,
        "characters": [],
        "genre": "History"
      },
      {
        "title": "1491",
        "pdf": "https://ia802800.us.archive.org/32/items/1491.newrevelationsoftheamericasbeforecolumbusbycharlesc.mann/1491.%20New%20revelations%20of%20the%20Americas%20before%20Columbus%20by%20Charles%20C.%20Mann.pdf",
        "author": "Charles C. Mann",
        "ratings": 4.1,
        "synopsis": "This book challenges conventional views of pre-Columbian history, presenting evidence of advanced civilizations in the Americas before European contact.",
        "number_of_pages": 541,
        "characters": [],
        "genre": "History"
      },
      {
        "title": "SPQR",
        "pdf": "https://ia801507.us.archive.org/32/items/history-of-ancient-rome-mary-beard-1_202210/History%20of%20Ancient%20Rome%20(Mary%20Beard)1.pdf",
        "author": "Mary Beard",
        "ratings": 4.3,
        "synopsis": "A comprehensive and accessible history of ancient Rome, from its legendary foundation to the fall of the Western Empire.",
        "number_of_pages": 608,
        "characters": [],
        "genre": "History"
      },
      {
        "title": "The Wright Brothers",
        "author": "David McCullough",
        "ratings": 4.3,
        "pdf": "https://ia801005.us.archive.org/31/items/wrightbrothersbi00kell_1/wrightbrothersbi00kell_1.pdf",
        "synopsis": "This biography chronicles the lives of Orville and Wilbur Wright, exploring their journey to inventing and successfully flying the first powered aircraft.",
        "number_of_pages": 336,
        "characters": [],
        "genre": "History"
      },
      {
        "title": "The Crusades",
        "pdf": "https://www.usu.edu/markdamen/1320hist&civ/pp/slides/15crusade.pdf",
        "author": "Thomas Asbridge",
        "ratings": 4.5,
        "synopsis": "An authoritative and comprehensive history of the Crusades, covering their origins, major battles, and impact on medieval Europe and the Middle East.",
        "number_of_pages": 784,
        "characters": [],
        "genre": "History"
      },
      {
        "title": "The Silk Roads",
        "pdf": "https://cdn.waterstones.com/special/pdf/9781408839997.pdf",
        "author": "Peter Frankopan",
        "ratings": 4.4,
        "synopsis": "This book explores the historical significance of the Silk Roads, tracing their impact on trade, culture, and civilization from ancient times to the present day.",
        "number_of_pages": 672,
        "characters": [],
        "genre": "History"
      },
      {
        "title": "The Cold War",
        "pdf": "https://www.cvce.eu/content/publication/2011/11/21/6dfe06ed-4790-48a4-8968-855e90593185/publishable_en.pdf",
        "author": "John Lewis Gaddis",
        "ratings": 4.2,
        "synopsis": "A comprehensive overview of the Cold War, examining its origins, key events, and lasting impact on global politics and society.",
        "number_of_pages": 352,
        "characters": [],
        "genre": "History"
      },




      //Biography
      {
        "title": "Steve Jobs",
        "author": "Walter Isaacson",
        "ratings": 4.1,
        "synopsis": "This biography of Steve Jobs offers an intimate portrait of the complex and enigmatic visionary who revolutionized several industries.",
        "number_of_pages": 656,
        "characters": ["Steve Jobs"],
        "genre": "Biography"
      },
      {
        "title": "The Diary of a Young Girl",
        "author": "Anne Frank",
        "ratings": 4.6,
        "synopsis": "The diary of Anne Frank is a powerful and moving account of a young girl's experiences during the Holocaust.",
        "number_of_pages": 283,
        "characters": ["Anne Frank"],
        "genre": "Biography"
      },
      {
        "title": "Unbroken: A World War II Story of Survival, Resilience, and Redemption",
        "author": "Laura Hillenbrand",
        "ratings": 4.4,
        "synopsis": "This biography tells the incredible true story of Louis Zamperini, an Olympic athlete turned WWII bombardier who survived a plane crash and endured years of captivity in Japanese POW camps.",
        "number_of_pages": 528,
        "characters": ["Louis Zamperini"],
        "genre": "Biography"
      },
      {
        "title": "The Immortal Life of Henrietta Lacks",
        "author": "Rebecca Skloot",
        "ratings": 4.1,
        "synopsis": "This book chronicles the life of Henrietta Lacks, an African American woman whose cells were harvested without her consent, leading to groundbreaking medical discoveries.",
        "number_of_pages": 381,
        "characters": ["Henrietta Lacks"],
        "genre": "Biography"
      },
      {
        "title": "Long Walk to Freedom",
        "author": "Nelson Mandela",
        "ratings": 4.7,
        "synopsis": "Nelson Mandela's autobiography offers a detailed account of his life, from his childhood in a rural village to his leadership role in the struggle against apartheid and his presidency of South Africa.",
        "number_of_pages": 656,
        "characters": ["Nelson Mandela"],
        "genre": "Biography"
      },
      {
        "title": "Alexander Hamilton",
        "author": "Ron Chernow",
        "ratings": 4.7,
        "synopsis": "This biography of Alexander Hamilton explores the life of one of America's founding fathers, from his rise to prominence as a statesman to his tragic death in a duel with Aaron Burr.",
        "number_of_pages": 832,
        "characters": ["Alexander Hamilton"],
        "genre": "Biography"
      },
      {
        "title": "Leonardo da Vinci",
        "author": "Walter Isaacson",
        "ratings": 4.2,
        "synopsis": "Walter Isaacson delves into the life of Leonardo da Vinci, exploring the mind of the Renaissance genius and his contributions to art, science, and humanity.",
        "number_of_pages": 624,
        "characters": ["Leonardo da Vinci"],
        "genre": "Biography"
      },
      {
        "title": "Malcolm X: A Life of Reinvention",
        "author": "Manning Marable",
        "ratings": 4.6,
        "synopsis": "Manning Marable offers a comprehensive and provocative biography of Malcolm X, shedding new light on the complexities of his life and legacy.",
        "number_of_pages": 608,
        "characters": ["Malcolm X"],
        "genre": "Biography"
      },
      {
        "title": "The Autobiography of Benjamin Franklin",
        "author": "Benjamin Franklin",
        "ratings": 4.1,
        "synopsis": "Benjamin Franklin's autobiography provides insight into the life of one of America's founding fathers, from his humble beginnings to his achievements as a statesman, inventor, and philosopher.",
        "number_of_pages": 320,
        "characters": ["Benjamin Franklin"],
        "genre": "Biography"
      },
      {
        "title": "Becoming",
        "author": "Michelle Obama",
        "ratings": 4.8,
        "synopsis": "Michelle Obama's memoir offers a deeply personal account of her life, from her childhood on the South Side of Chicago to her years in the White House as First Lady.",
        "number_of_pages": 426,
        "characters": ["Michelle Obama"],
        "genre": "Biography"
      },
      {
        "title": "The Wright Brothers",
        "author": "David McCullough",
        "ratings": 4.5,
        "synopsis": "David McCullough tells the captivating story of the Wright brothers, pioneers of aviation who overcame countless obstacles to achieve their dream of powered flight.",
        "number_of_pages": 336,
        "characters": ["Orville Wright", "Wilbur Wright"],
        "genre": "Biography"
      },
      {
        "title": "John Adams",
        "author": "David McCullough",
        "ratings": 4.5,
        "synopsis": "David McCullough paints a vivid portrait of John Adams, America's second president, exploring his pivotal role in the founding of the United States and his enduring friendship with Thomas Jefferson.",
        "number_of_pages": 752,
        "characters": ["John Adams"],
        "genre": "Biography"
      },



      /* Technology */
      {
        "title": "The Innovators: How a Group of Hackers, Geniuses, and Geeks Created the Digital Revolution",
        "author": "Walter Isaacson",
        "ratings": 4.2,
        "synopsis": "This book tells the story of the people who created the computer and the Internet revolution, from Ada Lovelace and Alan Turing to Bill Gates and Steve Jobs.",
        "pages": 560,
        "characters": [],
        "genre": "Technology"
      },
      {
        "title": "The Phoenix Project: A Novel About IT, DevOps, and Helping Your Business Win",
        "author": "Gene Kim, Kevin Behr, George Spafford",
        "ratings": 4.5,
        "synopsis": "This novel follows an IT manager as he tries to salvage a failing IT project, using principles from the DevOps movement to transform his organization.",
        "pages": 384,
        "characters": [],
        "genre": "Technology"
      },
      {
        "title": "Zero to One: Notes on Startups, or How to Build the Future",
        "author": "Peter Thiel, Blake Masters",
        "ratings": 4.2,
        "synopsis": "Entrepreneur and investor Peter Thiel shares his insights on startups and innovation, offering unconventional ideas for building a successful business.",
        "pages": 224,
        "characters": [],
        "genre": "Technology"
      },
      {
        "title": "The Soul of a New Machine",
        "author": "Tracy Kidder",
        "ratings": 4.3,
        "synopsis": "This Pulitzer Prize-winning book follows a team of engineers at Data General as they race to design a new computer against a tight deadline.",
        "pages": 293,
        "characters": [],
        "genre": "Technology"
      },
      {
        "title": "Hackers: Heroes of the Computer Revolution",
        "author": "Steven Levy",
        "ratings": 4.2,
        "synopsis": "Levy explores the early days of computing, profiling the hackers who pioneered the field and shaped the digital world we live in today.",
        "pages": 520,
        "characters": [],
        "genre": "Technology"
      },
      {
        "title": "Elon Musk: Tesla, SpaceX, and the Quest for a Fantastic Future",
        "author": "Ashlee Vance",
        "ratings": 4.5,
        "synopsis": "Journalist Ashlee Vance delves into the life of entrepreneur Elon Musk, exploring his ambitious projects and vision for the future.",
        "pages": 400,
        "characters": [],
        "genre": "Technology"
      },
      {
        "title": "Algorithms to Live By: The Computer Science of Human Decisions",
        "author": "Brian Christian, Tom Griffiths",
        "ratings": 4.2,
        "synopsis": "This book applies principles from computer science to everyday life, offering insights into decision-making and problem-solving.",
        "pages": 368,
        "characters": [],
        "genre": "Technology"
      },
      {
        "title": "The Second Machine Age: Work, Progress, and Prosperity in a Time of Brilliant Technologies",
        "author": "Erik Brynjolfsson, Andrew McAfee",
        "ratings": 4.1,
        "synopsis": "Brynjolfsson and McAfee explore the impact of technological progress on the economy and society, offering strategies for navigating the digital age.",
        "pages": 320,
        "characters": [],
        "genre": "Technology"
      },
      {
        "title": "Code: The Hidden Language of Computer Hardware and Software",
        "author": "Charles Petzold",
        "ratings": 4.6,
        "synopsis": "Petzold demystifies the world of computers by explaining how hardware and software work together to execute code, from binary digits to high-level programming languages.",
        "pages": 400,
        "characters": [],
        "genre": "Technology"
      },
      {
        "title": "The Art of Invisibility: The World's Most Famous Hacker Teaches You How to Be Safe in the Age of Big Brother and Big Data",
        "author": "Kevin Mitnick",
        "ratings": 4.3,
        "synopsis": "Former hacker turned security consultant Kevin Mitnick shares tips and techniques for protecting your privacy and security in the digital age.",
        "pages": 320,
        "characters": [],
        "genre": "Technology"
      },
      {
        "title": "Ghost in the Wires: My Adventures as the World's Most Wanted Hacker",
        "author": "Kevin Mitnick, William L. Simon",
        "ratings": 4.2,
        "synopsis": "Mitnick recounts his experiences as a notorious hacker, detailing his exploits and eventual capture by the FBI.",
        "pages": 432,
        "characters": [],
        "genre": "Technology"
      },
      {
        "title": "The Everything Store: Jeff Bezos and the Age of Amazon",
        "author": "Brad Stone",
        "ratings": 4.4,
        "synopsis": "Journalist Brad Stone provides an inside look at the rise of Amazon and its founder, Jeff Bezos, exploring the company's disruptive impact on retail and technology.",
        "pages": 384,
        "characters": [],
        "genre": "Technology"
      },



      /* Mathematics */
{
    "title": "Principles of Mathematical Analysis",
    "author": "Walter Rudin",
    "ratings": 4.6,
    "synopsis": "This classic analysis textbook provides a rigorous foundation in real analysis, covering topics such as sequences, series, continuity, differentiation, and integration.",
    "number_of_pages": 342,
    "characters": [],
    "genre": "Mathematics"
  },
  {
    "title": "Linear Algebra and Its Applications",
    "author": "Gilbert Strang",
    "ratings": 4.5,
    "synopsis": "An accessible introduction to linear algebra, focusing on applications in science, engineering, and other fields. It covers topics such as vector spaces, matrices, eigenvalues, and eigenvectors.",
    "number_of_pages": 480,
    "characters": [],
    "genre": "Mathematics"
  },
  {
    "title": "Introduction to Probability",
    "author": "Joseph K. Blitzstein, Jessica Hwang",
    "ratings": 4.4,
    "synopsis": "This book offers a comprehensive introduction to probability theory, covering both discrete and continuous probability, random variables, distributions, and statistical inference.",
    "number_of_pages": 540,
    "characters": [],
    "genre": "Mathematics"
  },
  {
    "title": "Calculus: Early Transcendentals",
    "author": "James Stewart",
    "ratings": 4.7,
    "synopsis": "A widely used calculus textbook that emphasizes conceptual understanding and applications. It covers topics such as limits, derivatives, integrals, and infinite series.",
    "number_of_pages": 1368,
    "characters": [],
    "genre": "Mathematics"
  },
  {
    "title": "Discrete Mathematics and Its Applications",
    "author": "Kenneth H. Rosen",
    "ratings": 4.3,
    "synopsis": "An essential textbook for computer science and mathematics students, covering topics such as logic, sets, functions, graph theory, and combinatorics.",
    "number_of_pages": 1072,
    "characters": [],
    "genre": "Mathematics"
  },
  {
    "title": "The Art of Problem Solving, Volume 1: The Basics",
    "author": "Sandor Lehoczky, Richard Rusczyk",
    "ratings": 4.8,
    "synopsis": "Designed for high school students preparing for math competitions, this book covers fundamental problem-solving techniques in algebra, geometry, and number theory.",
    "number_of_pages": 288,
    "characters": [],
    "genre": "Mathematics"
  },
  {
    "title": "A Mathematician's Apology",
    "author": "G.H. Hardy",
    "ratings": 4.1,
    "synopsis": "An autobiographical essay by the eminent mathematician G.H. Hardy, reflecting on the beauty and significance of mathematics and the role of mathematicians in society.",
    "number_of_pages": 153,
    "characters": [],
    "genre": "Mathematics"
  },
  {
    "title": "How to Solve It: A New Aspect of Mathematical Method",
    "author": "George Pólya",
    "ratings": 4.6,
    "synopsis": "This influential book presents general methods for solving mathematical problems, emphasizing heuristic approaches, problem-solving strategies, and the importance of understanding the problem before attempting a solution.",
    "number_of_pages": 288,
    "characters": [],
    "genre": "Mathematics"
  },
  {
    "title": "Gödel, Escher, Bach: An Eternal Golden Braid",
    "author": "Douglas Hofstadter",
    "ratings": 4.3,
    "synopsis": "A Pulitzer Prize-winning exploration of the connections between mathematics, art, and music, weaving together the works of mathematician Kurt Gödel, artist M.C. Escher, and composer Johann Sebastian Bach.",
    "number_of_pages": 824,
    "characters": [],
    "genre": "Mathematics"
  }
  ]
  
export default AllBooks;