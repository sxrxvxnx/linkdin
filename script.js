function addPost() {
  const input = document.getElementById('postInput');
  const text = input.value;

  if(text.trim() === '') return;

  const post = document.createElement('div');
  post.className = 'card';

  post.innerHTML = '<p>' + text + '</p>';

  document.getElementById('posts').prepend(post);
  input.value = '';
}
