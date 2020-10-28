// javascript for details.html
const id = new URLSearchParams(window.location.search).get('id');
const container = document.querySelector('.details');

const renderDetails = async () => {
  const response = await fetch(`http://localhost:3000/posts/${id}`);
  const post = await response.json();
  
  const template = `
    <div class="post">
      <h1>${post.title}</h1>
      <p>${post.body}</p>
      <a href="/">Go back</a>
    </div>  
  `

  container.innerHTML = template;
}

window.addEventListener('DOMContentLoaded', () => renderDetails());

