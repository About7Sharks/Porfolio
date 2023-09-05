const token = process.env.REACT_APP_Token;
const user = process.env.REACT_APP_User;
// https://pushover.net/api
export async function msg({
  msg,
  html = 0,
  url = null,
  title = "Z4C",
}) {
  let data = await fetch("https://api.pushover.net/1/messages.json", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      token,
      user,
      message: msg,
      title,
      html,
      url,
    }),
  });
  let json = await data.json();
  return json;
}
