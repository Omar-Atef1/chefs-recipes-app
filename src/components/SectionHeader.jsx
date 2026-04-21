function SectionHeader({ eyebrow, title, description }) {
  return (
    <div className="section-header">
      {eyebrow && <p className="section-header__eyebrow">{eyebrow}</p>}
      <h1>{title}</h1>
      {description && <p className="section-header__description">{description}</p>}
    </div>
  );
}

export default SectionHeader;
