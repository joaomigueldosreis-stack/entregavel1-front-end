export default function PostCard() {
  return (
    <div className="post-card">
      <img
        className="post-card-image"
        src="https://placehold.co/300x180"
        alt="Imagem do post"
      />
      <h3>Título do post</h3>
      <p>Essa é uma breve descrição do conteúdo do post.</p>
    </div>
  );
}