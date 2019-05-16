import axios from "axios";

const url = "http://127.0.0.1:5000/api/battle";

export const postBattleLog = async ({
  result,
  first_player,
  second_player
}) => {
  var params = new URLSearchParams();
  params.append("result", result);
  params.append("first_player", first_player);
  params.append("second_player", second_player);
  const res = await axios.post(url, params);
  return res.data;
};
