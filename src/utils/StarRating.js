function ratingsFunc(reviews) {
  return new Array(5).fill("*").map((r, i) => (i < reviews ? r : ""));
}

export default ratingsFunc;
