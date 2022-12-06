const refs = {
  inputWithId: document.querySelector(".input-with-id"),
  getPostBtn: document.querySelector(".get-post-btn"),
  getCommentsBtn: document.querySelector(".get-comments-btn"),
  postTitle: document.querySelector(".post__title"),
  postBody: document.querySelector(".post__body"),
  commentsList: document.querySelector(".post__comments-list"),
  search: document.querySelector(".search"),
  massege: document.querySelector(".massege"),
};

function getPostById(id) {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then(
    (response) => response.json()
  );
}

function getCommentsByPostIt(postId) {
  return fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
  ).then((response) => response.json());
}

refs.getPostBtn.addEventListener("click", onGetPostBtnClick);

function onGetPostBtnClick() {
  refs.commentsList.innerText = "";
  const postId = refs.inputWithId.value;
  if (iputValidation(postId)) {
    getPostById(postId)
      .then(({ title, body }) => {
        createPost({ title, body });
        refs.getCommentsBtn.addEventListener("click", onGetCommentsBtnClick);
      })
      .catch((err) => {
        refs.postTitle.innerText = `Error: ${err}`;
      });
    refs.getCommentsBtn.disabled = false;
  }
}

function createPost({ title, body }) {
  refs.postTitle.innerText = title;
  refs.postBody.innerText = body;
}

function onGetCommentsBtnClick() {
  const postId = refs.inputWithId.value;
  getCommentsByPostIt(postId)
    .then((comments) => {
      comments.forEach((comment) => {
        createCommentsList(comment);
      });
    })
    .catch(() => {
      refs.commentsList.insertAdjacentHTML(
        "beforeend",
        `<li>There is no comments for the post. </li>`
      );
    });
}

function createCommentsList({ name, email, body }) {
  refs.commentsList.innerText = "";
  refs.commentsList.insertAdjacentHTML(
    "beforeend",
    `<li>
    <p>Name: ${name}</p>
    <p>Email: ${email}</p>
    <p>Comment: ${body}</p>
    </li>`
  );
}

function iputValidation(postId) {
  if (postId < 1 || postId > 100) {
    refs.massege.innerText = "You can type a number in the range from 1 to 100";
    refs.postTitle.innerText = "";
    refs.postBody.innerText = "";
    refs.getCommentsBtn.disabled = true;
    return false;
  }

  refs.massege.innerText = "";
  return true;
}
