import axios from "axios";
function cardMaker() {
  const body = document.createElement("div");
  //Main Body
  const userImg = document.createElement("img");
  //User Img
  const userName = document.createElement("h1");
  //User Name
  const userFollowers = document.createElement("h2");
  //User Followers
  const userFollowing = document.createElement("h2");
  //User Following
  const websiteLink = document.createElement("h2");
  document.createElement("h2");
  //website Link
}
axios.get("https://api.github.com/users/JamariaSims").then((response) => {
  cardMaker(response.data);
});
