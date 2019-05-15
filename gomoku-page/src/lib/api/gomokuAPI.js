import axios from "axios";

const url = "http://127.0.0.1:5000/api/battle";

export const postBattleLog = async ({ winner, name1, name2 }) => {
  var params = new URLSearchParams();
  params.append("result", winner);
  params.append("name1", name1);
  params.append("name2", name2);
  const res = await axios.post(url, params);
  return res.data;
};
