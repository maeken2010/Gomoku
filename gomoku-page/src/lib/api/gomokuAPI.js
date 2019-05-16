import axios from "axios";

const battle_log_url = "http://127.0.0.1:5000/api/battle";
const record_url = "http://127.0.0.1:5000/api/record";

export const postBattleLog = async ({
  result,
  first_player,
  second_player
}) => {
  var params = new URLSearchParams();
  params.append("result", result);
  params.append("first_player", first_player);
  params.append("second_player", second_player);
  const res = await axios.post(battle_log_url, params);
  return res.data;
};

export const fetchBattleLog = async () => {
  const res = await axios.get(battle_log_url);
  return res.data;
};

export const postRecords = async (battle_id, records) => {
  var params = new URLSearchParams();
  params.append("battle_id", battle_id);
  params.append("records", JSON.stringify(records));
  const res = await axios.post(record_url, params);
  return res.data;
};

export const fetchRecords = async battle_id => {
  const res = await axios.get(battle_log_url + `/${battle_id}`);
  return res.data;
};
