function Section({ title, children }) {
    return (
      <>
        <div className="Section__section">
          <h3 className="Section__title">{title}</h3>
          <div>{children}</div>
        </div>
      </>
    );
}

export default Section