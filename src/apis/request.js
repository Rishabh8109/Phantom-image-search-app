import axios from "axios";

export function getAxiosRequest(
  ImageRequest1,
  ImageRequest2,
  ImageRequest3,
  setImages1,
  setImages2,
  setImages3
) {
  axios.all([ImageRequest1, ImageRequest2, ImageRequest3]).then(
    axios.spread(function (res1, res2, res3) {
      setImages1(res1.data);
      setImages2(res2.data);
      setImages3(res3.data);
    })
  );
}

export function getSearchRequest(
  ImageRequest1,
  ImageRequest2,
  ImageRequest3,
  setImages1,
  setImages2,
  setImages3
) {
  axios.all([ImageRequest1, ImageRequest2, ImageRequest3]).then(
    axios.spread(function (res1, res2, res3) {
      setImages1(res1.data.results);
      setImages2(res2.data.results);
      setImages3(res3.data.results);
    })
  );
}

