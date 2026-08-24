export default function TitleDescriptionInfo({ title, description }) {
  return (
    <div className="title-description">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}