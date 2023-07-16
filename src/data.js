import dummy from "./assets/categorydummy.png";
import church from "./assets/church.png";
import cross from "./assets/Cross.png";
import dummy2 from "./assets/dummy.png";
import dummy3 from "./assets/dummy2.png";

const data = {
  Action: {
    title: "Interview with God",
    coverImage: dummy,
    bio: "The Redemption's Path is a compelling Christian movie that takes viewers on a transformative journey of faith, forgiveness, and spiritual renewal. Set in a small town struggling with personal struggles and a loss of hope, the film centers around the lives of three main characters whose paths intersect in unexpected ways.",
    time: "1hr 20min",
    year: 2019,
    genre: "Action",
    casts: [
      "Segun Jackob",
      "Segun Daniel",
      "Oguntedo Aremu",
      "Segun Gabriel",
      "Jesus Caleb",
    ],
  },
  Comedy: {
    title: "Comedy Movie",
    coverImage: church,
    year: 2021,
    genre: "Comedy",
    casts: ["Actor 1", "Actor 2", "Actor 3", "Actor 4", "Actor 5"],
    bio: "This is a comedy movie description.",
  },
  Sermon: {
    title: "Sermon Movie",
    coverImage: dummy3,
    year: 2022,
    genre: "Sermon",
    casts: ["Preacher 1", "Preacher 2", "Preacher 3"],
    bio: "This is a sermon movie description.",
  },
  Lifestyle: {
    title: "Lifestyle Movie",
    coverImage: cross,
    year: 2023,
    genre: "Lifestyle",
    casts: ["Actor 1", "Actor 2", "Actor 3", "Actor 4", "Actor 5"],
    bio: "This is a lifestyle movie description.",
  },
  New: {
    title: "New Movie",
    coverImage: dummy2,
    year: 2023,
    genre: "New",
    casts: ["Actor 1", "Actor 2", "Actor 3", "Actor 4", "Actor 5"],
    bio: "This is a new movie description.",
  },
};

export default data;
