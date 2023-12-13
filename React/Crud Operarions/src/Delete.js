var url = "https://64e2cbfbbac46e480e77c247.mockapi.io/student";
function Delete(id, callback) {
  fetch(url + "/" + id, { method: "delete" }).then(() => {
    callback();
  });
}
export default Delete;
