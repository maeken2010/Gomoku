import axios from "axios";

const post_battle_log_url = "http://127.0.0.1:5000/api/battle";
const post_record_url = "http://127.0.0.1:5000/api/record";

export const postBattleLog = async ({
  result,
  first_player,
  second_player
}) => {
  var params = new URLSearchParams();
  params.append("result", result);
  params.append("first_player", first_player);
  params.append("second_player", second_player);
  const res = await axios.post(post_battle_log_url, params);
  return res.data;
};

export const postRecords = async (battle_id, records) => {
  var params = new URLSearchParams();
  params.append("battle_id", battle_id);
  params.append("records", JSON.stringify(records));
  const res = await axios.post(post_record_url, params);
  return res.data;
};
